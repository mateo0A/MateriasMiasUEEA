import React from 'react';

const Sistemas = () => {
    return (
        <div>
            <h1><i className="bi bi-hdd-network"></i> Sistemas Operativos</h1>
            <section>
                <h2><i className="bi bi-info-circle"></i> ¿Qué es un Sistema Operativo?</h2>
                <p>
                    Un <b>sistema operativo (SO)</b> es un software fundamental que administra los recursos de hardware y software de una computadora. Permite la interacción entre el usuario y el hardware, y proporciona servicios esenciales para la ejecución de programas.
                </p>
            </section>
            <section>
                <h2><i className="bi bi-gear"></i> Funciones principales</h2>
                <ul>
                    <li><i className="bi bi-cpu"></i> <b>Gestión de procesos:</b> Controla la ejecución de programas y la asignación de recursos.</li>
                    <li><i className="bi bi-memory"></i> <b>Gestión de memoria:</b> Administra el uso de la memoria RAM entre los procesos.</li>
                    <li><i className="bi bi-folder2-open"></i> <b>Gestión de archivos:</b> Organiza, almacena y recupera archivos en dispositivos de almacenamiento.</li>
                    <li><i className="bi bi-usb-symbol"></i> <b>Gestión de dispositivos:</b> Controla y comunica con dispositivos periféricos (impresoras, discos, etc.).</li>
                    <li><i className="bi bi-person"></i> <b>Interfaz de usuario:</b> Proporciona una forma de interactuar con el sistema (CLI o GUI).</li>
                    <li><i className="bi bi-shield-lock"></i> <b>Seguridad y protección:</b> Controla el acceso a los recursos y protege la información.</li>
                </ul>
            </section>
            <section>
                <h2><i className="bi bi-layers"></i> Tipos de Sistemas Operativos</h2>
                <ul>
                    <li><i className="bi bi-person"></i> <b>Monousuario:</b> Un solo usuario a la vez (ej: MS-DOS).</li>
                    <li><i className="bi bi-people"></i> <b>Multiusuario:</b> Varios usuarios pueden usar el sistema simultáneamente (ej: Linux, Unix, Windows Server).</li>
                    <li><i className="bi bi-1-circle"></i> <b>Monotarea:</b> Ejecuta una sola tarea a la vez.</li>
                    <li><i className="bi bi-list-ol"></i> <b>Multitarea:</b> Permite ejecutar varios procesos al mismo tiempo.</li>
                    <li><i className="bi bi-clock-history"></i> <b>Tiempo real:</b> Responde a eventos en tiempo muy corto (ej: sistemas embebidos).</li>
                    <li><i className="bi bi-cloud"></i> <b>Distribuidos:</b> Gestionan recursos en varias computadoras conectadas en red.</li>
                </ul>
            </section>
            <section>
                <h2><i className="bi bi-windows"></i> Ejemplos de Sistemas Operativos</h2>
                <div className="df-simbolos">
                  <div className="df-figura df-ovalo"><i className="bi bi-windows"></i><span> Windows</span></div>
                  <div className="df-figura df-rectangulo"><i className="bi bi-ubuntu"></i><span> Linux</span></div>
                  <div className="df-figura df-paralelogramo"><i className="bi bi-apple"></i><span> macOS</span></div>
                  <div className="df-figura df-rombo"><i className="bi bi-android2"></i><span> Android</span></div>
                  <div className="df-figura df-rectangulo"><i className="bi bi-phone"></i><span> iOS</span></div>
                </div>
            </section>
            <section>
                <h2><i className="bi bi-diagram-3"></i> Relación entre usuario, SO y hardware</h2>
                <div className="df-ejemplo-horiz">
                  <div className="df-figura df-ovalo"><i className="bi bi-person"></i> Usuario</div>
                  <div className="df-flecha-horiz"></div>
                  <div className="df-figura df-rectangulo"><i className="bi bi-hdd-network"></i> Sistema Operativo</div>
                  <div className="df-flecha-horiz"></div>
                  <div className="df-figura df-paralelogramo"><i className="bi bi-cpu"></i> Hardware</div>
                </div>
            </section>
        </div>
    )
}

export default Sistemas;