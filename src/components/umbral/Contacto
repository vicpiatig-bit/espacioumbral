import { useState } from "react";
import { Reveal } from "./Reveal";

type Estado = "idle" | "enviando" | "ok" | "error";

export function Contacto() {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [estado, setEstado] = useState<Estado>("idle");
  const [errores, setErrores] = useState<{ nombre?: string; mail?: string }>({});

  function validar() {
    const e: { nombre?: string; mail?: string } = {};
    if (!nombre.trim()) e.nombre = "Escribí tu nombre.";
    if (!mail.trim()) e.mail = "Escribí tu mail.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail))
      e.mail = "El mail no parece válido.";
    return e;
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const e_ = validar();
    if (Object.keys(e_).length > 0) {
      setErrores(e_);
      return;
    }
    setErrores({});
    setEstado("enviando");

    // Simulación de envío — reemplazar con fetch a tu endpoint real
    await new Promise((res) => setTimeout(res, 1200));
    setEstado("ok");
  }

  return (
    <section id="contacto" className="scroll-mt-24 bg-sand/45">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-44">
        <div className="mx-auto max-w-xl">

          {estado === "ok" ? (
            <Reveal>
              <div className="text-center">
                <p className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.015em] text-foreground">
                  Gracias, {nombre.split(" ")[0]}.
                </p>
                <p className="mt-6 text-[0.95rem] leading-[1.9] text-muted-foreground">
                  Te escribimos pronto.
                </p>
              </div>
            </Reveal>
          ) : (
            <>
              <Reveal>
                <p className="text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
                  Contacto
                </p>
                <h2 className="mt-6 font-serif text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.05] tracking-[-0.015em] text-foreground">
                  ¿Querés saber más?
                </h2>
                <p className="mt-5 text-[0.95rem] leading-[1.9] text-muted-foreground">
                  Dejanos tu nombre y mail. Te respondemos en menos de 24 horas.
                </p>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-12 space-y-6">

                  {/* Campo: Nombre */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contacto-nombre"
                      className="block text-[0.72rem] uppercase tracking-[0.2em] text-foreground/70"
                    >
                      Nombre
                    </label>
                    <input
                      id="contacto-nombre"
                      type="text"
                      autoComplete="name"
                      value={nombre}
                      onChange={(e) => {
                        setNombre(e.target.value);
                        if (errores.nombre) setErrores((prev) => ({ ...prev, nombre: undefined }));
                      }}
                      placeholder="Tu nombre"
                      aria-describedby={errores.nombre ? "error-nombre" : undefined}
                      aria-invalid={!!errores.nombre}
                      className={`w-full border-b bg-transparent py-3 text-[0.95rem] text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors duration-300 focus:border-foreground ${
                        errores.nombre
                          ? "border-red-500"
                          : "border-foreground/20 hover:border-foreground/40"
                      }`}
                    />
                    {errores.nombre && (
                      <p id="error-nombre" role="alert" className="text-[0.78rem] text-red-500">
                        {errores.nombre}
                      </p>
                    )}
                  </div>

                  {/* Campo: Mail */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contacto-mail"
                      className="block text-[0.72rem] uppercase tracking-[0.2em] text-foreground/70"
                    >
                      Mail
                    </label>
                    <input
                      id="contacto-mail"
                      type="email"
                      autoComplete="email"
                      value={mail}
                      onChange={(e) => {
                        setMail(e.target.value);
                        if (errores.mail) setErrores((prev) => ({ ...prev, mail: undefined }));
                      }}
                      placeholder="tu@mail.com"
                      aria-describedby={errores.mail ? "error-mail" : undefined}
                      aria-invalid={!!errores.mail}
                      className={`w-full border-b bg-transparent py-3 text-[0.95rem] text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors duration-300 focus:border-foreground ${
                        errores.mail
                          ? "border-red-500"
                          : "border-foreground/20 hover:border-foreground/40"
                      }`}
                    />
                    {errores.mail && (
                      <p id="error-mail" role="alert" className="text-[0.78rem] text-red-500">
                        {errores.mail}
                      </p>
                    )}
                  </div>

                  {/* Botón */}
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={estado === "enviando"}
                      className="inline-flex min-h-12 items-center justify-center rounded-full border border-foreground bg-foreground px-9 py-4 text-[0.72rem] font-normal uppercase tracking-[0.22em] text-background shadow-[0_10px_28px_-14px_color-mix(in_oklab,var(--foreground)_55%,transparent)] transition-all duration-500 hover:bg-foreground/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground disabled:opacity-50"
                    >
                      {estado === "enviando" ? "Enviando…" : "Escribinos →"}
                    </button>

                    {estado === "error" && (
                      <p role="alert" className="mt-4 text-[0.78rem] text-red-500">
                        Algo salió mal. Intentá de nuevo o escribinos por WhatsApp.
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            </>
          )}

        </div>
      </div>
    </section>
  );
}
