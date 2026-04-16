import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Política de Privacidad | Preventiva Este',
    description: 'Política de Privacidad y Protección de Datos de Preventiva Este.',
};

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">Política de Privacidad</h1>

            <div className="prose prose-lg max-w-none text-slate-700">
                <p>
                    En Preventiva Este, nos comprometemos a proteger y respetar su privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos sus datos personales de acuerdo con el Reglamento General de Protección de Datos (RGPD) de la Unión Europea y la legislación española vigente.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">1. Responsable del Tratamiento</h2>
                <p>
                    Los datos personales recabados a través de este sitio web son responsabilidad de Preventiva Este.<br />
                    <strong>Correo electrónico de contacto:</strong> contacto@preventivaeste.com<br />
                    <strong>Teléfono:</strong> 637 003 793<br />
                    Ubicación: Barcelona, Cataluña (Prestamos servicio en toda el Área Metropolitana de Barcelona y Cataluña).
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">2. Finalidad del Tratamiento</h2>
                <p>Recopilamos y tratamos sus datos personales con las siguientes finalidades:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Atención de solicitudes:</strong> Para gestionar las consultas, solicitudes de presupuesto o información enviadas a través de nuestros formularios de contacto o canales de comunicación (WhatsApp, email, teléfono).
                    </li>
                    <li>
                        <strong>Prestación de servicios:</strong> Para llevar a cabo la instalación de redes de protección y servicios contratados, incluyendo la facturación y gestión administrativa.
                    </li>
                    <li>
                        <strong>Mejora del servicio:</strong> Para analizar el uso de nuestra web mediante cookies (ver apartado de Cookies) y mejorar la experiencia de usuario.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">3. Legitimación</h2>
                <p>
                    La base legal para el tratamiento de sus datos es su <strong>consentimiento explícito</strong> al enviar un formulario de contacto o aceptar nuestras cookies, así como la <strong>ejecución de un contrato</strong> en caso de contratar nuestros servicios.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">4. Destinatarios de los Datos</h2>
                <p>
                    Sus datos no serán cedidos a terceros, salvo obligación legal o cuando sea necesario para la prestación del servicio (por ejemplo, empresas de transporte o instaladores colaboradores, siempre bajo acuerdos de confidencialidad).
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">5. Derechos del Usuario</h2>
                <p>Usted tiene derecho a:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Acceder a sus datos personales.</li>
                    <li>Rectificar datos inexactos o incompletos.</li>
                    <li>Solicitar la supresión de sus datos cuando ya no sean necesarios.</li>
                    <li>Oponerse al tratamiento o solicitar su limitación.</li>
                    <li>Portabilidad de sus datos.</li>
                </ul>
                <p className="mt-4">
                    Para ejercer estos derechos, puede enviar un correo electrónico a <strong>contacto@preventivaeste.com</strong> indicando el derecho que desea ejercer.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">6. Seguridad de los Datos</h2>
                <p>
                    Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">7. Uso de Cookies</h2>
                <p>
                    Este sitio web utiliza cookies propias y de terceros para mejorar la navegación y obtener datos estadísticos. Usted puede configurar su navegador para rechazar las cookies, aunque esto podría afectar al funcionamiento de la web.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">8. Cambios en la Política de Privacidad</h2>
                <p>
                    Preventiva Este se reserva el derecho de modificar esta política para adaptarla a novedades legislativas o jurisprudenciales. Se recomienda su lectura periódica.
                </p>

                <p className="text-sm text-slate-500 mt-12">
                    Última actualización: {new Date().toLocaleDateString('es-ES')}
                </p>
            </div>
        </div>
    );
}
