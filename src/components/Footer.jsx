import { CONFIG } from '../config.js';

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container-page py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white font-bold shadow-soft">
            J
          </span>
          <div className="text-sm text-slate-500">
            <div className="font-semibold text-slate-800">
              {CONFIG.teacher.firstName} · English Teacher
            </div>
            <div>© {new Date().getFullYear()} · Все права защищены</div>
          </div>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm text-slate-500">
          <a href="#about" className="hover:text-brand-700">Обо мне</a>
          <a href="#pricing" className="hover:text-brand-700">Цены</a>
          <a href="#reviews" className="hover:text-brand-700">Отзывы</a>
          <a href="#contact" className="hover:text-brand-700">Контакты</a>
        </nav>
      </div>
    </footer>
  );
}
