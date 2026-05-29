import { useState } from 'react';
import { CONFIG } from '../config.js';
import { useT } from '../i18n/LanguageContext.jsx';
import { ArrowRightIcon } from './Icons.jsx';

export default function EnquiryForm() {
  const t = useT().contact;
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const formspreeId = CONFIG.forms.formspreeId;
  const hasFormspree = formspreeId && formspreeId !== 'YOUR_FORMSPREE_ID';

  async function onSubmit(e) {
    e.preventDefault();
    if (!hasFormspree) return; // mailto fallback handles it via the form's action

    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('sending');

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  // Without a Formspree ID, fall back to opening the user's mail client.
  const fallbackAction = `mailto:${CONFIG.forms.fallbackEmail}`;

  return (
    <div className="mx-auto max-w-3xl rounded-3xl bg-white ring-1 ring-slate-200/60 shadow-card p-7 sm:p-9">
      <div className="text-center max-w-xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {t.formTitle}
        </h3>
        <p className="mt-2 text-slate-600">{t.formSub}</p>
      </div>

      {status === 'success' ? (
        <div className="mt-7 rounded-2xl bg-emerald-50 ring-1 ring-emerald-200 p-5 text-emerald-800 text-center">
          {t.formSuccess}
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          action={hasFormspree ? `https://formspree.io/f/${formspreeId}` : fallbackAction}
          method="POST"
          className="mt-7 grid gap-4"
        >
          {/* Honeypot, ignored by humans, caught by bots */}
          <input
            type="text"
            name="_gotcha"
            tabIndex="-1"
            autoComplete="off"
            className="hidden"
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label={t.formName}
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder={t.formNamePlaceholder}
            />
            <Field
              label={t.formEmail}
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={t.formEmailPlaceholder}
            />
          </div>
          <Field
            label={t.formMessage}
            name="message"
            as="textarea"
            required
            rows={5}
            placeholder={t.formMessagePlaceholder}
          />

          {/* Subject line for the resulting email */}
          <input
            type="hidden"
            name="_subject"
            value="New enquiry from learnenglishwithjoan.com"
          />

          {status === 'error' && (
            <div className="rounded-xl bg-rose-50 ring-1 ring-rose-200 p-3 text-rose-700 text-sm">
              {t.formError}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary justify-center mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? t.formSending : t.formSubmit}
            <ArrowRightIcon />
          </button>
        </form>
      )}
    </div>
  );
}

function Field({ label, name, as = 'input', ...props }) {
  const Tag = as;
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
        {label}
      </span>
      <Tag
        name={name}
        {...props}
        className="mt-1.5 block w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 ring-1 ring-slate-200/80 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:shadow-sm focus:outline-none transition-all duration-300 resize-none hover:ring-slate-300"
      />
    </label>
  );
}
