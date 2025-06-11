import { useEffect } from 'react';
import { animate } from 'animejs';

const Programacion = () => {
    useEffect(() => {
        // Animar la aparición de los símbolos de diagrama de flujo
        animate('.df-figura', {
            opacity: [0, 1],
            scale: [0.7, 1],
            delay: (el, i) => 200 + i * 120,
            duration: 700,
            easing: 'outExpo',
        });
        // Animar las flechas verticales
        animate('.df-flecha-vert', {
            scaleY: [0, 1],
            opacity: [0, 1],
            delay: (el, i) => 600 + i * 100,
            duration: 500,
            easing: 'outExpo',
        });
        // Animar las líneas horizontales
        animate('.df-flecha-horiz', {
            scaleX: [0, 1],
            opacity: [0, 1],
            delay: (el, i) => 800 + i * 100,
            duration: 500,
            easing: 'outExpo',
        });
    }, []);

    return (
        <div>
            <h1>Programación</h1>
            <section>
                <h2>Declaración de Variables</h2>
                <p>
                    Una <b>variable</b> es un espacio en memoria reservado para almacenar datos que pueden cambiar durante la ejecución de un programa. Las variables permiten manipular información y realizar operaciones en los algoritmos. La declaración de variables varía según el lenguaje de programación, pero en general implica definir un nombre (identificador) y, en algunos lenguajes, especificar el tipo de dato que almacenará.
                </p>
                <h3>¿Por qué son importantes las variables?</h3>
                <ul>
                    <li>Permiten almacenar y modificar datos de manera dinámica.</li>
                    <li>Facilitan la reutilización de valores y la realización de cálculos.</li>
                    <li>Ayudan a estructurar y organizar el código.</li>
                </ul>
                <h3>Reglas para nombrar variables:</h3>
                <ul>
                    <li>El nombre debe comenzar con una letra, guion bajo (_) o signo de dólar ($) (en JavaScript).</li>
                    <li>No puede contener espacios ni caracteres especiales (excepto _ o $).</li>
                    <li>No debe ser una palabra reservada del lenguaje.</li>
                    <li>Se recomienda usar nombres descriptivos y en minúsculas (ejemplo: <i>edadUsuario</i>).</li>
                </ul>
                <h3>Declaración en diferentes lenguajes:</h3>
                <pre>{`// JavaScript
let edad = 25;
const nombre = "Juan";
var activo = true;

// Python
edad = 25
nombre = "Juan"
activo = True

// C++
int edad = 25;
string nombre = "Juan";
bool activo = true;

// C#
int edad = 25;
string nombre = "Juan";
bool activo = true;
`}</pre>
                <ul>
                    <li><b>let</b>: Permite declarar variables cuyo valor puede cambiar (JavaScript).</li>
                    <li><b>const</b>: Declara constantes, su valor no puede cambiar (JavaScript).</li>
                    <li><b>var</b>: Forma antigua de declarar variables, menos recomendada (JavaScript).</li>
                </ul>
                <h3>Buenas prácticas:</h3>
                <ul>
                    <li>Usar nombres descriptivos y claros.</li>
                    <li>Inicializar las variables al declararlas si es posible.</li>
                    <li>Evitar variables globales innecesarias.</li>
                    <li>Utilizar el tipo de dato adecuado para cada variable.</li>
                </ul>
                <h3>Errores comunes:</h3>
                <ul>
                    <li>Olvidar inicializar una variable antes de usarla.</li>
                    <li>Confundir el alcance (scope) de la variable.</li>
                    <li>Reutilizar nombres de variables, causando confusión.</li>
                </ul>
                <h3>Tipos de datos comunes:</h3>
                <ul>
                    <li><b>Números enteros (int, integer):</b> Almacenan valores numéricos sin decimales. Ejemplo: <code>int edad = 20;</code></li>
                    <li><b>Números decimales (float, double):</b> Almacenan valores numéricos con decimales. Ejemplo: <code>float temperatura = 36.6;</code></li>
                    <li><b>Cadenas de texto (string, char):</b> Almacenan texto. <code>string nombre = "Ana";</code> <code>char inicial = 'A';</code></li>
                    <li><b>Booleanos (bool):</b> Solo pueden tener dos valores: <code>true</code> o <code>false</code>. Ejemplo: <code>bool activo = true;</code></li>
                    <li><b>Arreglos (arrays):</b> Estructuras que almacenan varios valores del mismo tipo. Ejemplo: <code>int[] numeros = {"1,2,3"};</code></li>
                    <li><b>Objetos:</b> Estructuras complejas que pueden contener varios tipos de datos y métodos. Ejemplo en JavaScript: <code>let persona = {"'nombre': 'Ana', 'edad': 20"};</code></li>
                    <li><b>Null:</b> Representa la ausencia de valor o un valor nulo. Ejemplo: <code>let dato = null;</code></li>
                </ul>
            </section>
            <section>
                <h2>Diagramas de Flujo</h2>
                <p>
                    Un <b>diagrama de flujo</b> es una representación gráfica de un algoritmo o proceso. Utiliza símbolos estandarizados para mostrar el flujo de control y las operaciones que se realizan paso a paso. Los diagramas de flujo ayudan a visualizar la lógica de un programa antes de codificarlo, facilitando la comprensión y detección de errores.
                </p>
                <div className="df-simbolos">
                  <div className="df-figura df-ovalo">
                    <span>Inicio / Fin</span>
                  </div>
                  <div className="df-figura df-paralelogramo">
                    <span>Entrada / Salida</span>
                  </div>
                  <div className="df-figura df-rectangulo">
                    <span>Proceso</span>
                  </div>
                  <div className="df-figura df-rombo">
                    <span>Condición</span>
                  </div>
                  <div className="df-figura df-flecha">
                    <span>Flujo</span>
                  </div>
                </div>
                <h3>Declaración de variables</h3>
                <div className="df-ejemplo">
                  <div className="df-figura df-ovalo">Inicio</div>
                  <div className="df-flecha-vert"></div>
                  <div className="df-figura df-paralelogramo">Leer edad</div>
                  <div className="df-flecha-vert"></div>
                  <div className="df-figura df-rectangulo">edad = 20</div>
                  <div className="df-flecha-vert"></div>
                  <div className="df-figura df-ovalo">Fin</div>
                </div>
                <h3>Condiciones (Decisión)</h3>
                <div className="df-ejemplo">
                  <div className="df-figura df-ovalo">Inicio</div>
                  <div className="df-flecha-vert"></div>
                  <div className="df-figura df-paralelogramo">Leer edad</div>
                  <div className="df-flecha-vert"></div>
                  <div className="df-figura df-rombo">¿edad &gt;= 18?</div>
                  <div className="df-flecha-vert"></div>
                  <div className="df-condiciones">
                    <div>
                      <span>Sí</span>
                      <div className="df-figura df-rectangulo">Mostrar "Mayor de edad"</div>
                    </div>
                    <div>
                      <span>No</span>
                      <div className="df-figura df-rectangulo">Mostrar "Menor de edad"</div>
                    </div>
                  </div>
                  <div className="df-flecha-vert"></div>
                  <div className="df-figura df-ovalo">Fin</div>
                </div>
                <h3>Bucles (Ciclos)</h3>
                <div className="df-ejemplo">
                  <div className="df-figura df-ovalo">Inicio</div>
                  <div className="df-flecha-vert"></div>
                  <div className="df-figura df-rectangulo">i = 1</div>
                  <div className="df-flecha-vert"></div>
                  <div className="df-figura df-rombo">¿i &lt;= 5?</div>
                  <div className="df-flecha-vert"></div>
                  <div className="df-figura df-rectangulo">Mostrar i</div>
                  <div className="df-flecha-vert"></div>
                  <div className="df-figura df-rectangulo">i = i + 1</div>
                  <div className="df-flecha-vert"></div>
                  <div className="df-figura df-rombo">¿i &lt;= 5?</div>
                  <div className="df-flecha-vert"></div>
                  <div className="df-figura df-ovalo">Fin</div>
                </div>
                <h3>Ejemplo de conexión horizontal</h3>
                <div className="df-ejemplo-horiz">
                  <div className="df-figura df-rectangulo">Proceso 1</div>
                  <div className="df-flecha-horiz"></div>
                  <div className="df-figura df-rombo"><span>Condición</span></div>
                </div>
                <h3>¿Para qué sirven los diagramas de flujo?</h3>
                <ul>
                    <li>Permiten planificar y documentar algoritmos de manera visual.</li>
                    <li>Facilitan la comunicación entre programadores y otros miembros del equipo.</li>
                    <li>Ayudan a identificar errores lógicos antes de programar.</li>
                </ul>
                <h3>Herramientas para crear diagramas de flujo:</h3>
                <ul>
                    <li>draw.io (gratuito y online)</li>
                    <li>Lucidchart</li>
                    <li>Microsoft Visio</li>
                    <li>yEd Graph Editor</li>
                </ul>
                <p><i>Los diagramas de flujo son fundamentales para el análisis y diseño de algoritmos, especialmente en la etapa de aprendizaje de la programación.</i></p>
            </section>
        </div>
    )
}

export default Programacion;