const Footer = () => {
  return (
    <footer className="py-12 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-active-glow mb-2">ACTIVE</h3>
            <p className="text-accent-foreground/70 text-sm">
              Pilates na Parede para Emagrecimento
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-accent-foreground/70">
            <a href="#" className="hover:text-active-glow transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-active-glow transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-active-glow transition-colors">
              Contato
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-accent-foreground/50">
            <p>© 2024 ACTIVE. Todos os direitos reservados.</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-accent-foreground/10 text-center">
          <p className="text-xs text-accent-foreground/50 max-w-3xl mx-auto leading-relaxed">
            Aviso Legal: Os resultados podem variar de pessoa para pessoa. 
            As informações contidas neste site não substituem uma consulta médica. 
            Consulte um profissional de saúde antes de iniciar qualquer programa de exercícios.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
