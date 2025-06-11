const DiseñoWeb = () => {
    return (
        <div>
            <h1>Diseño Web</h1>
            <section>
                <h2>Display Flex</h2>
                <p>
                    <b>Flexbox</b> es un modelo de diseño unidimensional que permite distribuir espacio y alinear elementos en un contenedor, incluso cuando su tamaño es desconocido o dinámico.
                </p>
                <pre>{`/* Contenedor flex */
.contenedor {
  display: flex;
  flex-direction: row; /* row | row-reverse | column | column-reverse */
  justify-content: center; /* flex-start | flex-end | center | space-between | space-around | space-evenly */
  align-items: center; /* flex-start | flex-end | center | stretch | baseline */
  gap: 1em;
  flex-wrap: wrap; /* wrap | nowrap | wrap-reverse */
}`}</pre>
                <ul>
                    <li><b>justify-content</b>: Alinea los elementos horizontalmente.</li>
                    <li><b>align-items</b>: Alinea los elementos verticalmente.</li>
                    <li><b>flex-direction</b>: Dirección principal del eje.</li>
                    <li><b>flex-wrap</b>: Permite que los elementos pasen a otra línea.</li>
                    <li><b>gap</b>: Espacio entre los elementos.</li>
                </ul>
            </section>
            <section>
                <h2>Display Grid</h2>
                <p>
                    <b>CSS Grid</b> es un sistema de diseño bidimensional que permite crear layouts complejos usando filas y columnas.
                </p>
                <pre>{`/* Contenedor grid */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 200px;
  gap: 1em;
  justify-items: center; /* start | end | center | stretch */
  align-items: stretch; /* start | end | center | stretch */
  grid-template-areas:
    "header header header"
    "menu main aside";
}

.grid-item {
  grid-column: 2 / 4;
  grid-row: 1;
  grid-area: main;
}`}</pre>
                <ul>
                    <li><b>grid-template-columns/rows</b>: Define el número y tamaño de columnas/filas.</li>
                    <li><b>grid-area</b>: Asigna un área nombrada a un elemento.</li>
                    <li><b>justify-items</b> y <b>align-items</b>: Alineación de los elementos hijos.</li>
                    <li><b>gap</b>: Espacio entre filas y columnas.</li>
                </ul>
            </section>
            <section>
                <h2>Pseudoelementos y Pseudoclases</h2>
                <ul>
                    <li><b>::before / ::after</b>: Insertan contenido antes o después de un elemento.
                        <pre>{`.boton::after {
  content: "→";
  margin-left: 0.5em;
}`}</pre>
                    </li>
                    <li><b>:hover</b>: Aplica estilos cuando el mouse pasa sobre el elemento.
                        <pre>{`.enlace:hover {
  color: #ff0;
  text-decoration: underline;
}`}</pre>
                    </li>
                    <li><b>:active, :focus, :nth-child, :first-child, :last-child</b>: Otras pseudoclases útiles.</li>
                </ul>
            </section>
            <section>
                <h2>Variables CSS</h2>
                <pre>{`:root {
  --color-principal: #3498db;
  --espaciado: 1.5em;
}
.caja {
  background: var(--color-principal);
  margin: var(--espaciado);
}`}</pre>
                <ul>
                    <li>Permiten reutilizar valores y facilitar cambios globales de estilo.</li>
                    <li>Se pueden sobrescribir en cualquier selector.</li>
                </ul>
            </section>
            <section>
                <h2>Clases y ID</h2>
                <ul>
                    <li><b>Clases (.)</b>: Se usan para aplicar estilos a varios elementos.
                        <pre>{`.boton { color: white; }`}</pre>
                    </li>
                    <li><b>ID (#)</b>: Se usa para identificar un único elemento.
                        <pre>{`#menu { background: #222; }`}</pre>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Animaciones y Transiciones</h2>
                <pre>{`.caja {
  transition: background 0.3s, transform 0.3s;
}
.caja:hover {
  background: #ff0;
  transform: scale(1.1);
}
@keyframes girar {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.logo {
  animation: girar 2s linear infinite;
}`}</pre>
                <ul>
                    <li><b>transition</b>: Anima cambios de propiedades CSS.</li>
                    <li><b>animation</b>: Permite animaciones complejas con <b>@keyframes</b>.</li>
                </ul>
            </section>
            <section>
                <h2>Responsive Design y Media Queries</h2>
                <pre>{`@media (max-width: 600px) {
  .contenedor {
    flex-direction: column;
  }
}`}</pre>
                <ul>
                    <li>Permite adaptar el diseño a diferentes tamaños de pantalla.</li>
                </ul>
            </section>
            <section>
                <h2>Otras propiedades útiles</h2>
                <ul>
                    <li><b>overflow</b>: Controla el desbordamiento de contenido (<code>hidden</code>, <code>scroll</code>, <code>auto</code>).</li>
                    <li><b>z-index</b>: Controla el apilamiento de elementos posicionados.</li>
                    <li><b>position</b>: <code>static</code>, <code>relative</code>, <code>absolute</code>, <code>fixed</code>, <code>sticky</code>.</li>
                    <li><b>box-shadow</b> y <b>border-radius</b>: Sombra y bordes redondeados.</li>
                    <li><b>object-fit</b>: Controla el ajuste de imágenes y videos.</li>
                    <li><b>backdrop-filter</b>: Efectos visuales como desenfoque.</li>
                </ul>
            </section>
            <section>
                <h2>Ejemplo visual: Flexbox</h2>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1em',
                    background: '#232733',
                    padding: '1em',
                    borderRadius: '8px',
                    marginBottom: '1.5em',
                    border: '1px solid #333',
                    minHeight: '70px'
                }}>
                    <div style={{background:'#6fa8ff',color:'#fff',padding:'0.7em 1.2em',borderRadius:'6px'}}>Caja 1</div>
                    <div style={{background:'#b3ffd1',color:'#232733',padding:'0.7em 1.2em',borderRadius:'6px'}}>Caja 2</div>
                    <div style={{background:'#ffe6b3',color:'#232733',padding:'0.7em 1.2em',borderRadius:'6px'}}>Caja 3</div>
                </div>
            </section>
            <section>
                <h2>Ejemplo visual: Grid</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr 1fr',
                    gridTemplateRows: '50px 80px',
                    gap: '0.7em',
                    background: '#232733',
                    padding: '1em',
                    borderRadius: '8px',
                    marginBottom: '1.5em',
                    border: '1px solid #333',
                    alignItems: 'center',
                    justifyItems: 'center'
                }}>
                    <div style={{gridColumn:'1/4',background:'#6fa8ff',color:'#fff',padding:'0.5em 0',borderRadius:'6px',width:'100%',textAlign:'center'}}>Header</div>
                    <div style={{background:'#b3ffd1',color:'#232733',padding:'0.7em',borderRadius:'6px',width:'100%',textAlign:'center'}}>Menu</div>
                    <div style={{background:'#ffe6b3',color:'#232733',padding:'0.7em',borderRadius:'6px',width:'100%',textAlign:'center',gridColumn:'2/3',gridRow:'2/3'}}>Main</div>
                    <div style={{background:'#e6b3ff',color:'#232733',padding:'0.7em',borderRadius:'6px',width:'100%',textAlign:'center'}}>Aside</div>
                </div>
            </section>
            <section>
                <h2>Ejemplo visual: Hover y transición</h2>
                <button style={{
                    background:'#6fa8ff',
                    color:'#fff',
                    border:'none',
                    borderRadius:'6px',
                    padding:'0.7em 1.5em',
                    fontSize:'1.1em',
                    cursor:'pointer',
                    transition:'background 0.3s, transform 0.3s',
                    marginBottom:'1.5em'
                }}
                onMouseOver={e => {e.currentTarget.style.background='#2056a8';e.currentTarget.style.transform='scale(1.1)'}}
                onMouseOut={e => {e.currentTarget.style.background='#6fa8ff';e.currentTarget.style.transform='scale(1)'}}
                >
                    Pasa el mouse aquí
                </button>
            </section>
            <section>
                <h2>Ejemplo visual: Pseudoelementos ::before y ::after</h2>
                <div style={{position:'relative',marginBottom:'1.5em'}}>
                    <span style={{
                        display:'inline-block',
                        padding:'0.7em 1.2em',
                        background:'#6fa8ff',
                        color:'#fff',
                        borderRadius:'6px',
                        position:'relative',
                        fontWeight:'bold',
                        fontSize:'1.1em',
                        marginRight:'1em'
                    }}>
                        <span style={{position:'absolute',left:'-1.5em',color:'#b3ffd1',fontWeight:'bold'}}>&#8592;</span>
                        Botón
                        <span style={{position:'absolute',right:'-1.5em',color:'#ffe6b3',fontWeight:'bold'}}>&#8594;</span>
                    </span>
                    <pre>{`.boton::before { content: '←'; margin-right: 0.5em; }
.boton::after { content: '→'; margin-left: 0.5em; }`}</pre>
                </div>
            </section>
            <section>
                <h2>Ejemplo visual: Font Size y Color</h2>
                <div style={{marginBottom:'1.5em'}}>
                    <span style={{fontSize:'1.2em',color:'#6fa8ff',marginRight:'1em'}}>Texto grande</span>
                    <span style={{fontSize:'0.9em',color:'#b3ffd1',marginRight:'1em'}}>Texto pequeño</span>
                    <span style={{fontSize:'1em',color:'#ffe6b3'}}>Texto normal</span>
                    <pre>{`.grande { font-size: 1.2em; color: #6fa8ff; }
.pequeno { font-size: 0.9em; color: #b3ffd1; }
.normal { font-size: 1em; color: #ffe6b3; }`}</pre>
                </div>
            </section>
            <section>
                <h2>Ejemplo visual: Clases e ID</h2>
                <div style={{marginBottom:'1.5em'}}>
                    <div style={{background:'#b3ffd1',color:'#232733',padding:'0.7em 1.2em',borderRadius:'6px',display:'inline-block',marginRight:'1em'}}>
                        Clase: .caja
                    </div>
                    <div style={{background:'#ffe6b3',color:'#232733',padding:'0.7em 1.2em',borderRadius:'6px',display:'inline-block'}}>
                        ID: #especial
                    </div>
                    <pre>{`.caja { background: #b3ffd1; color: #232733; }
#especial { background: #ffe6b3; color: #232733; }`}</pre>
                </div>
            </section>
            <section>
                <h2>Ejemplo visual: Variables CSS</h2>
                <div style={{marginBottom:'1.5em'}}>
                    <div style={{background:'var(--color-principal, #6fa8ff)',color:'#fff',padding:'0.7em 1.2em',borderRadius:'6px',display:'inline-block',marginRight:'1em'}}>Caja con variable</div>
                    <pre>{`:root { --color-principal: #6fa8ff; }
.caja { background: var(--color-principal); }`}</pre>
                </div>
            </section>
            <section>
                <h2>Ejemplo visual: Hover</h2>
                <button style={{
                    background:'#6fa8ff',
                    color:'#fff',
                    border:'none',
                    borderRadius:'6px',
                    padding:'0.7em 1.5em',
                    fontSize:'1.1em',
                    cursor:'pointer',
                    transition:'background 0.3s, transform 0.3s',
                    marginBottom:'1.5em'
                }}
                onMouseOver={e => {e.currentTarget.style.background='#2056a8';e.currentTarget.style.transform='scale(1.1)'}}
                onMouseOut={e => {e.currentTarget.style.background='#6fa8ff';e.currentTarget.style.transform='scale(1)'}}
                >
                    Hover aquí
                </button>
                <pre>{`.boton:hover { background: #2056a8; transform: scale(1.1); }`}</pre>
            </section>
            <section>
                <h2>Ejemplo visual: Animación y transición</h2>
                <div style={{
                    width:'60px',height:'60px',borderRadius:'50%',background:'#6fa8ff',margin:'0 auto 1em',animation:'girar 2s linear infinite',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:'bold',fontSize:'1.3em',boxShadow:'0 0 12px #6fa8ff88'
                }}>
                    <span style={{animation:'none'}}>A</span>
                </div>
                <pre>{`@keyframes girar {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.logo { animation: girar 2s linear infinite; }`}</pre>
            </section>
            <section>
                <h2>Ejemplo visual: Pseudoclases avanzadas</h2>
                <ul style={{display:'flex',gap:'1em',marginBottom:'1.5em',listStyle:'none',padding:0}}>
                    <li style={{background:'#6fa8ff',color:'#fff',padding:'0.5em 1em',borderRadius:'6px'}}>Primer hijo</li>
                    <li style={{background:'#b3ffd1',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>Segundo hijo</li>
                    <li style={{background:'#ffe6b3',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>Tercer hijo</li>
                </ul>
                <pre>{`.lista li:first-child { background: #6fa8ff; }
.lista li:nth-child(2) { background: #b3ffd1; }
.lista li:last-child { background: #ffe6b3; }`}</pre>
            </section>
            <section>
                <h2>Ejemplo visual: Todos los Pseudoelementos CSS</h2>
                <div style={{marginBottom:'1.5em'}}>
                    <div style={{position:'relative',display:'inline-block',marginRight:'1em'}}>
                        <span style={{
                            display:'inline-block',
                            padding:'0.7em 1.2em',
                            background:'#6fa8ff',
                            color:'#fff',
                            borderRadius:'6px',
                            fontWeight:'bold',
                            fontSize:'1.1em',
                            position:'relative',
                            zIndex:1
                        }}>
                            <span style={{position:'absolute',left:'-1.5em',color:'#b3ffd1',fontWeight:'bold',zIndex:2}}>&#8592;</span>
                            ::before
                            <span style={{position:'absolute',right:'-1.5em',color:'#ffe6b3',fontWeight:'bold',zIndex:2}}>&#8594;</span>
                        </span>
                        <pre>{`.ejemplo::before { content: '←'; margin-right: 0.5em; }
.ejemplo::after { content: '→'; margin-left: 0.5em; }`}</pre>
                    </div>
                    <div style={{display:'inline-block',marginRight:'1em',verticalAlign:'top'}}>
                        <span style={{
                            display:'inline-block',
                            padding:'0.7em 1.2em',
                            background:'#b3ffd1',
                            color:'#232733',
                            borderRadius:'6px',
                            fontWeight:'bold',
                            fontSize:'1.1em',
                            position:'relative',
                            zIndex:1
                        }}>
                            <span style={{position:'absolute',top:'-1.5em',left:'50%',transform:'translateX(-50%)',color:'#6fa8ff',fontWeight:'bold',zIndex:2}}>&#8593;</span>
                            ::first-line
                            <span style={{position:'absolute',bottom:'-1.5em',left:'50%',transform:'translateX(-50%)',color:'#6fa8ff',fontWeight:'bold',zIndex:2}}>&#8595;</span>
                        </span>
                        <pre>{`.ejemplo::first-line { color: #6fa8ff; font-weight: bold; }`}</pre>
                    </div>
                    <div style={{display:'inline-block',marginRight:'1em',verticalAlign:'top'}}>
                        <span style={{
                            display:'inline-block',
                            padding:'0.7em 1.2em',
                            background:'#ffe6b3',
                            color:'#232733',
                            borderRadius:'6px',
                            fontWeight:'bold',
                            fontSize:'1.1em',
                            position:'relative',
                            zIndex:1
                        }}>
                            <span style={{position:'absolute',top:'-1.5em',left:'50%',transform:'translateX(-50%)',color:'#a64eb2',fontWeight:'bold',zIndex:2}}>&#8593;</span>
                            ::first-letter
                        </span>
                        <pre>{`.ejemplo::first-letter { font-size: 2em; color: #a64eb2; }`}</pre>
                    </div>
                    <div style={{display:'inline-block',marginRight:'1em',verticalAlign:'top'}}>
                        <span style={{
                            display:'inline-block',
                            padding:'0.7em 1.2em',
                            background:'#e6b3ff',
                            color:'#232733',
                            borderRadius:'6px',
                            fontWeight:'bold',
                            fontSize:'1.1em',
                            position:'relative',
                            zIndex:1
                        }}>
                            <span style={{position:'absolute',top:'-1.5em',left:'50%',transform:'translateX(-50%)',color:'#4eae6f',fontWeight:'bold',zIndex:2}}>&#8593;</span>
                            ::selection
                        </span>
                        <pre>{`.ejemplo::selection { background: #4eae6f; color: #fff; }`}</pre>
                    </div>
                    <div style={{display:'inline-block',marginRight:'1em',verticalAlign:'top'}}>
                        <span style={{
                            display:'inline-block',
                            padding:'0.7em 1.2em',
                            background:'#ae7c4e',
                            color:'#fff',
                            borderRadius:'6px',
                            fontWeight:'bold',
                            fontSize:'1.1em',
                            position:'relative',
                            zIndex:1
                        }}>
                            <span style={{position:'absolute',top:'-1.5em',left:'50%',transform:'translateX(-50%)',color:'#fff',fontWeight:'bold',zIndex:2}}>&#8593;</span>
                            ::marker
                        </span>
                        <pre>{`ul.ejemplo li::marker { color: #ae7c4e; font-size: 1.5em; }`}</pre>
                    </div>
                    <div style={{display:'inline-block',marginRight:'1em',verticalAlign:'top'}}>
                        <span style={{
                            display:'inline-block',
                            padding:'0.7em 1.2em',
                            background:'#4e6fae',
                            color:'#fff',
                            borderRadius:'6px',
                            fontWeight:'bold',
                            fontSize:'1.1em',
                            position:'relative',
                            zIndex:1
                        }}>
                            <span style={{position:'absolute',top:'-1.5em',left:'50%',transform:'translateX(-50%)',color:'#fff',fontWeight:'bold',zIndex:2}}>&#8593;</span>
                            ::placeholder
                        </span>
                        <pre>{`input.ejemplo::placeholder { color: #4e6fae; opacity: 1; }`}</pre>
                    </div>
                </div>
            </section>
            <section>
                <h2>Flexbox: justify-content, align-items y flex-direction</h2>
                <p>Prueba visual de cómo afectan estas propiedades la alineación y dirección de los elementos en Flexbox.</p>
                <h3>justify-content</h3>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',marginBottom:'0.5em'}}>
                    <span style={{background:'#6fa8ff',color:'#fff',padding:'0.5em 1em',borderRadius:'6px'}}>flex-start</span>
                    <div style={{display:'flex',flex:1,justifyContent:'flex-start',gap:'0.5em'}}>
                        <div style={{background:'#b3ffd1',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>A</div>
                        <div style={{background:'#ffe6b3',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>B</div>
                        <div style={{background:'#e6b3ff',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>C</div>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',marginBottom:'0.5em'}}>
                    <span style={{background:'#6fa8ff',color:'#fff',padding:'0.5em 1em',borderRadius:'6px'}}>center</span>
                    <div style={{display:'flex',flex:1,justifyContent:'center',gap:'0.5em'}}>
                        <div style={{background:'#b3ffd1',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>A</div>
                        <div style={{background:'#ffe6b3',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>B</div>
                        <div style={{background:'#e6b3ff',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>C</div>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',alignItems:'center',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',marginBottom:'0.5em'}}>
                    <span style={{background:'#6fa8ff',color:'#fff',padding:'0.5em 1em',borderRadius:'6px'}}>flex-end</span>
                    <div style={{display:'flex',flex:1,justifyContent:'flex-end',gap:'0.5em'}}>
                        <div style={{background:'#b3ffd1',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>A</div>
                        <div style={{background:'#ffe6b3',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>B</div>
                        <div style={{background:'#e6b3ff',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>C</div>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',marginBottom:'0.5em'}}>
                    <span style={{background:'#6fa8ff',color:'#fff',padding:'0.5em 1em',borderRadius:'6px'}}>space-between</span>
                    <div style={{display:'flex',flex:1,justifyContent:'space-between',gap:'0.5em'}}>
                        <div style={{background:'#b3ffd1',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>A</div>
                        <div style={{background:'#ffe6b3',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>B</div>
                        <div style={{background:'#e6b3ff',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>C</div>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',marginBottom:'0.5em'}}>
                    <span style={{background:'#6fa8ff',color:'#fff',padding:'0.5em 1em',borderRadius:'6px'}}>space-around</span>
                    <div style={{display:'flex',flex:1,justifyContent:'space-around',gap:'0.5em'}}>
                        <div style={{background:'#b3ffd1',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>A</div>
                        <div style={{background:'#ffe6b3',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>B</div>
                        <div style={{background:'#e6b3ff',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>C</div>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',marginBottom:'1.5em'}}>
                    <span style={{background:'#6fa8ff',color:'#fff',padding:'0.5em 1em',borderRadius:'6px'}}>space-evenly</span>
                    <div style={{display:'flex',flex:1,justifyContent:'space-evenly',gap:'0.5em'}}>
                        <div style={{background:'#b3ffd1',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>A</div>
                        <div style={{background:'#ffe6b3',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>B</div>
                        <div style={{background:'#e6b3ff',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>C</div>
                    </div>
                </div>
                <h3>align-items</h3>
                <div style={{display:'flex',flexDirection:'row',alignItems:'flex-start',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',height:'80px',marginBottom:'0.5em'}}>
                    <span style={{background:'#6fa8ff',color:'#fff',padding:'0.5em 1em',borderRadius:'6px'}}>flex-start</span>
                    <div style={{display:'flex',flex:1,alignItems:'flex-start',gap:'0.5em',height:'60px'}}>
                        <div style={{background:'#b3ffd1',color:'#232733',padding:'0.5em 1em',borderRadius:'6px',height:'30px'}}>A</div>
                        <div style={{background:'#ffe6b3',color:'#232733',padding:'0.5em 1em',borderRadius:'6px',height:'50px'}}>B</div>
                        <div style={{background:'#e6b3ff',color:'#232733',padding:'0.5em 1em',borderRadius:'6px',height:'40px'}}>C</div>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',height:'80px',marginBottom:'0.5em'}}>
                    <span style={{background:'#6fa8ff',color:'#fff',padding:'0.5em 1em',borderRadius:'6px'}}>center</span>
                    <div style={{display:'flex',flex:1,alignItems:'center',gap:'0.5em',height:'60px'}}>
                        <div style={{background:'#b3ffd1',color:'#232733',padding:'0.5em 1em',borderRadius:'6px',height:'30px'}}>A</div>
                        <div style={{background:'#ffe6b3',color:'#232733',padding:'0.5em 1em',borderRadius:'6px',height:'50px'}}>B</div>
                        <div style={{background:'#e6b3ff',color:'#232733',padding:'0.5em 1em',borderRadius:'6px',height:'40px'}}>C</div>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',height:'80px',marginBottom:'0.5em'}}>
                    <span style={{background:'#6fa8ff',color:'#fff',padding:'0.5em 1em',borderRadius:'6px'}}>flex-end</span>
                    <div style={{display:'flex',flex:1,alignItems:'flex-end',gap:'0.5em',height:'60px'}}>
                        <div style={{background:'#b3ffd1',color:'#232733',padding:'0.5em 1em',borderRadius:'6px',height:'30px'}}>A</div>
                        <div style={{background:'#ffe6b3',color:'#232733',padding:'0.5em 1em',borderRadius:'6px',height:'50px'}}>B</div>
                        <div style={{background:'#e6b3ff',color:'#232733',padding:'0.5em 1em',borderRadius:'6px',height:'40px'}}>C</div>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'stretch',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',height:'80px',marginBottom:'1.5em'}}>
                    <span style={{background:'#6fa8ff',color:'#fff',padding:'0.5em 1em',borderRadius:'6px'}}>stretch</span>
                    <div style={{display:'flex',flex:1,alignItems:'stretch',gap:'0.5em',height:'60px'}}>
                        <div style={{background:'#b3ffd1',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>A</div>
                        <div style={{background:'#ffe6b3',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>B</div>
                        <div style={{background:'#e6b3ff',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>C</div>
                    </div>
                </div>
                <h3>flex-direction</h3>
                <div style={{display:'flex',flexDirection:'row',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',marginBottom:'0.5em'}}>
                    <span style={{background:'#6fa8ff',color:'#fff',padding:'0.5em 1em',borderRadius:'6px'}}>row</span>
                    <div style={{display:'flex',flexDirection:'row',gap:'0.5em'}}>
                        <div style={{background:'#b3ffd1',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>A</div>
                        <div style={{background:'#ffe6b3',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>B</div>
                        <div style={{background:'#e6b3ff',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>C</div>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'column',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',marginBottom:'0.5em'}}>
                    <span style={{background:'#6fa8ff',color:'#fff',padding:'0.5em 1em',borderRadius:'6px'}}>column</span>
                    <div style={{display:'flex',flexDirection:'column',gap:'0.5em'}}>
                        <div style={{background:'#b3ffd1',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>A</div>
                        <div style={{background:'#ffe6b3',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>B</div>
                        <div style={{background:'#e6b3ff',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>C</div>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'row-reverse',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',marginBottom:'0.5em'}}>
                    <span style={{background:'#6fa8ff',color:'#fff',padding:'0.5em 1em',borderRadius:'6px'}}>row-reverse</span>
                    <div style={{display:'flex',flexDirection:'row-reverse',gap:'0.5em'}}>
                        <div style={{background:'#b3ffd1',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>A</div>
                        <div style={{background:'#ffe6b3',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>B</div>
                        <div style={{background:'#e6b3ff',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>C</div>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'column-reverse',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',marginBottom:'1.5em'}}>
                    <span style={{background:'#6fa8ff',color:'#fff',padding:'0.5em 1em',borderRadius:'6px'}}>column-reverse</span>
                    <div style={{display:'flex',flexDirection:'column-reverse',gap:'0.5em'}}>
                        <div style={{background:'#b3ffd1',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>A</div>
                        <div style={{background:'#ffe6b3',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>B</div>
                        <div style={{background:'#e6b3ff',color:'#232733',padding:'0.5em 1em',borderRadius:'6px'}}>C</div>
                    </div>
                </div>
                <pre>{`/* Ejemplo de uso */
.contenedor {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
}`}</pre>
            </section>
            <section>
                <h2>Grid: justify-items, align-items, justify-content, align-content y grid-auto-flow</h2>
                <p>Visualización de cómo estas propiedades afectan la alineación y dirección de los elementos en CSS Grid.</p>
                <h3>justify-items y align-items</h3>
                <div style={{display:'grid',gridTemplateColumns:'repeat(3,80px)',gridTemplateRows:'repeat(2,60px)',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',justifyItems:'start',alignItems:'start',marginBottom:'0.5em'}}>
                    <span style={{gridColumn:'1/4',color:'#fff'}}>justify-items: start, align-items: start</span>
                    <div style={{background:'#b3ffd1',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>A</div>
                    <div style={{background:'#ffe6b3',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>B</div>
                    <div style={{background:'#e6b3ff',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>C</div>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'repeat(3,80px)',gridTemplateRows:'repeat(2,60px)',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',justifyItems:'center',alignItems:'center',marginBottom:'0.5em'}}>
                    <span style={{gridColumn:'1/4',color:'#fff'}}>justify-items: center, align-items: center</span>
                    <div style={{background:'#b3ffd1',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>A</div>
                    <div style={{background:'#ffe6b3',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>B</div>
                    <div style={{background:'#e6b3ff',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>C</div>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'repeat(3,80px)',gridTemplateRows:'repeat(2,60px)',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',justifyItems:'end',alignItems:'end',marginBottom:'1.5em'}}>
                    <span style={{gridColumn:'1/4',color:'#fff'}}>justify-items: end, align-items: end</span>
                    <div style={{background:'#b3ffd1',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>A</div>
                    <div style={{background:'#ffe6b3',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>B</div>
                    <div style={{background:'#e6b3ff',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>C</div>
                </div>
                <h3>justify-content y align-content</h3>
                <div style={{display:'grid',gridTemplateColumns:'repeat(3,60px)',gridTemplateRows:'repeat(2,40px)',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',justifyContent:'center',alignContent:'center',height:'160px',marginBottom:'0.5em'}}>
                    <span style={{gridColumn:'1/4',color:'#fff'}}>justify-content: center, align-content: center</span>
                    <div style={{background:'#b3ffd1',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>A</div>
                    <div style={{background:'#ffe6b3',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>B</div>
                    <div style={{background:'#e6b3ff',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>C</div>
                    <div style={{background:'#b3ffd1',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>D</div>
                    <div style={{background:'#ffe6b3',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>E</div>
                    <div style={{background:'#e6b3ff',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>F</div>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'repeat(3,60px)',gridTemplateRows:'repeat(2,40px)',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',justifyContent:'space-between',alignContent:'space-between',height:'160px',marginBottom:'0.5em'}}>
                    <span style={{gridColumn:'1/4',color:'#fff'}}>justify-content: space-between, align-content: space-between</span>
                    <div style={{background:'#b3ffd1',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>A</div>
                    <div style={{background:'#ffe6b3',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>B</div>
                    <div style={{background:'#e6b3ff',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>C</div>
                    <div style={{background:'#b3ffd1',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>D</div>
                    <div style={{background:'#ffe6b3',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>E</div>
                    <div style={{background:'#e6b3ff',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>F</div>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'repeat(3,60px)',gridTemplateRows:'repeat(2,40px)',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',justifyContent:'space-around',alignContent:'space-around',height:'160px',marginBottom:'1.5em'}}>
                    <span style={{gridColumn:'1/4',color:'#fff'}}>justify-content: space-around, align-content: space-around</span>
                    <div style={{background:'#b3ffd1',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>A</div>
                    <div style={{background:'#ffe6b3',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>B</div>
                    <div style={{background:'#e6b3ff',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>C</div>
                    <div style={{background:'#b3ffd1',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>D</div>
                    <div style={{background:'#ffe6b3',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>E</div>
                    <div style={{background:'#e6b3ff',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>F</div>
                </div>
                <h3>grid-auto-flow</h3>
                <div style={{display:'grid',gridTemplateColumns:'repeat(3,60px)',gridAutoFlow:'row',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',marginBottom:'0.5em'}}>
                    <span style={{gridColumn:'1/4',color:'#fff'}}>grid-auto-flow: row</span>
                    <div style={{background:'#b3ffd1',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>A</div>
                    <div style={{background:'#ffe6b3',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>B</div>
                    <div style={{background:'#e6b3ff',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>C</div>
                    <div style={{background:'#b3ffd1',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>D</div>
                </div>
                <div style={{display:'grid',gridTemplateRows:'repeat(2,40px)',gridAutoFlow:'column',gap:'0.5em',background:'#232733',padding:'0.7em',borderRadius:'8px',marginBottom:'1.5em'}}>
                    <span style={{gridRow:'1/3',color:'#fff'}}>grid-auto-flow: column</span>
                    <div style={{background:'#b3ffd1',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>A</div>
                    <div style={{background:'#ffe6b3',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>B</div>
                    <div style={{background:'#e6b3ff',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>C</div>
                    <div style={{background:'#b3ffd1',color:'#232733',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>D</div>
                </div>
                <pre>{`/* Ejemplo de uso */
.grid-container {
  display: grid;
  justify-items: center;
  align-items: end;
  justify-content: space-between;
  align-content: center;
  grid-auto-flow: column;
}`}</pre>
            </section>
        </div>
    )
}

export default DiseñoWeb;