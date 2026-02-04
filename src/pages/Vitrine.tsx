import { useEffect } from "react";
import { Header } from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    // Trava o scroll da página principal
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      // Restaura o scroll ao sair da página
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      {/* Header fixo - 80px */}
      <Header />

      {/* Iframe - ocupa o espaço restante */}
      <main 
        className="flex-1 w-full pt-20"
        style={{ height: "calc(100vh - 80px - 63px)" }}
      >
        <iframe
          src="https://gessofreitasccgmailcom.egestor.com.br/vitrine/"
          title="Demonstração de Vitrine"
          className="w-full h-full border-none"
          style={{ 
            width: "100%", 
            height: "100%",
            border: "none"
          }}
        />
      </main>
    </div>
  );
};

export default Vitrine;
