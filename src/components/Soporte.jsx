import React from 'react';

const Soporte = () => {
    return (
        <div>
            <h1>Soporte Técnico</h1>
            <section>
                <h2>Ponchado de cables de red (RJ45)</h2>
                <p>
                    El ponchado de cables de red consiste en preparar y conectar los cables de par trenzado (UTP) a conectores RJ45 para crear cables de red Ethernet. Existen dos estándares principales: <b>T568A</b> y <b>T568B</b>.
                </p>
                <div style={{display:'flex',gap:'2em',flexWrap:'wrap',alignItems:'center',marginBottom:'1.5em'}}>
                    <div style={{background:'#232733',padding:'1em',borderRadius:'8px',color:'#b3ffd1',minWidth:'180px'}}>
                        <b>Estándar T568A</b>
                        <ol style={{margin:'0.7em 0 0 1.2em'}}>
                            <li>Blanco/Verde</li>
                            <li>Verde</li>
                            <li>Blanco/Naranja</li>
                            <li>Azul</li>
                            <li>Blanco/Azul</li>
                            <li>Naranja</li>
                            <li>Blanco/Marrón</li>
                            <li>Marrón</li>
                        </ol>
                    </div>
                    <div style={{background:'#232733',padding:'1em',borderRadius:'8px',color:'#ffe6b3',minWidth:'180px'}}>
                        <b>Estándar T568B</b>
                        <ol style={{margin:'0.7em 0 0 1.2em'}}>
                            <li>Blanco/Naranja</li>
                            <li>Naranja</li>
                            <li>Blanco/Verde</li>
                            <li>Azul</li>
                            <li>Blanco/Azul</li>
                            <li>Verde</li>
                            <li>Blanco/Marrón</li>
                            <li>Marrón</li>
                        </ol>
                    </div>
                    <div style={{minWidth:'180px',textAlign:'center'}}>
                        <svg width="80" height="120" viewBox="0 0 80 120">
                            <rect x="10" y="10" width="60" height="100" rx="10" fill="#232733" stroke="#6fa8ff" strokeWidth="3"/>
                            <rect x="20" y="20" width="40" height="80" rx="5" fill="#181c24" />
                            {["#b3ffd1","#4eae6f","#ffe6b3","#6fa8ff","#b3cfff","#ae7c4e","#e6b3ff","#fff"].map((color,i)=>(
                                <rect key={i} x={23+i*4} y="25" width="3" height="70" fill={color} stroke="#232733" strokeWidth="1"/>
                            ))}
                        </svg>
                        <div style={{fontSize:'0.9em',color:'#b3cfff'}}>Ejemplo gráfico RJ45</div>
                    </div>
                </div>
                <ul>
                    <li>Usa una <b>crimpadora</b> para fijar el conector RJ45.</li>
                    <li>Verifica el orden de los cables antes de ponchar.</li>
                    <li>Prueba el cable con un <b>probador de red</b>.</li>
                </ul>
            </section>
            <section>
                <h2>Soporte preventivo de laptops y computadoras</h2>
                <ul>
                    <li>Limpieza interna de polvo (ventiladores, disipadores, fuentes).</li>
                    <li>Revisión y limpieza de puertos y conectores.</li>
                    <li>Verificación de estado de discos duros y memorias.</li>
                    <li>Actualización de sistema operativo y antivirus.</li>
                    <li>Revisión de temperatura y aplicación de pasta térmica si es necesario.</li>
                </ul>
                <div style={{display:'flex',gap:'2em',flexWrap:'wrap',alignItems:'center',marginBottom:'1.5em'}}>
                    <div style={{background:'#232733',padding:'1em',borderRadius:'8px',color:'#b3ffd1',minWidth:'180px',textAlign:'center'}}>
                        <svg width="80" height="80" viewBox="0 0 80 80">
                            <rect x="10" y="20" width="60" height="40" rx="8" fill="#6fa8ff" stroke="#232733" strokeWidth="3"/>
                            <rect x="25" y="60" width="30" height="8" rx="2" fill="#232733" />
                            <rect x="30" y="30" width="20" height="10" rx="2" fill="#232733" />
                        </svg>
                        <div style={{fontSize:'0.9em',color:'#b3cfff'}}>Laptop</div>
                    </div>
                    <div style={{background:'#232733',padding:'1em',borderRadius:'8px',color:'#ffe6b3',minWidth:'180px',textAlign:'center'}}>
                        <svg width="80" height="80" viewBox="0 0 80 80">
                            <rect x="20" y="20" width="40" height="40" rx="8" fill="#b3ffd1" stroke="#232733" strokeWidth="3"/>
                            <rect x="30" y="65" width="20" height="6" rx="2" fill="#232733" />
                        </svg>
                        <div style={{fontSize:'0.9em',color:'#b3cfff'}}>PC de escritorio</div>
                    </div>
                </div>
            </section>
            <section>
                <h2>Redes</h2>
                <ul>
                    <li>Tipos de redes: LAN, WAN, MAN, WLAN.</li>
                    <li>Dispositivos: router, switch, access point, repetidor.</li>
                    <li>Topologías: estrella, bus, anillo, malla.</li>
                    <li>Direcciones IP y subredes.</li>
                    <li>WiFi y cableado estructurado.</li>
                </ul>
                <div style={{display:'flex',gap:'2em',flexWrap:'wrap',alignItems:'center',marginBottom:'1.5em'}}>
                    <div style={{background:'#232733',padding:'1em',borderRadius:'8px',color:'#b3ffd1',minWidth:'180px',textAlign:'center'}}>
                        <svg width="80" height="80" viewBox="0 0 80 80">
                            <circle cx="40" cy="40" r="30" fill="#6fa8ff" stroke="#232733" strokeWidth="3"/>
                            <circle cx="40" cy="40" r="10" fill="#232733" />
                            <line x1="40" y1="40" x2="40" y2="10" stroke="#b3ffd1" strokeWidth="3"/>
                            <line x1="40" y1="40" x2="70" y2="40" stroke="#b3ffd1" strokeWidth="3"/>
                            <line x1="40" y1="40" x2="10" y2="40" stroke="#b3ffd1" strokeWidth="3"/>
                            <line x1="40" y1="40" x2="40" y2="70" stroke="#b3ffd1" strokeWidth="3"/>
                        </svg>
                        <div style={{fontSize:'0.9em',color:'#b3cfff'}}>Red en estrella</div>
                    </div>
                    <div style={{background:'#232733',padding:'1em',borderRadius:'8px',color:'#ffe6b3',minWidth:'180px',textAlign:'center'}}>
                        <svg width="80" height="80" viewBox="0 0 80 80">
                            <rect x="10" y="35" width="60" height="10" rx="5" fill="#b3ffd1" stroke="#232733" strokeWidth="3"/>
                            <circle cx="20" cy="40" r="6" fill="#6fa8ff" />
                            <circle cx="40" cy="40" r="6" fill="#6fa8ff" />
                            <circle cx="60" cy="40" r="6" fill="#6fa8ff" />
                        </svg>
                        <div style={{fontSize:'0.9em',color:'#b3cfff'}}>Red en bus</div>
                    </div>
                </div>
            </section>
            <section>
                <h2>Ejemplos gráficos de topologías de red</h2>
                <div style={{display:'flex',gap:'2em',flexWrap:'wrap',alignItems:'center',marginBottom:'1.5em'}}>
                    {/* Estrella */}
                    <div style={{background:'#232733',padding:'1em',borderRadius:'8px',color:'#b3ffd1',minWidth:'180px',textAlign:'center'}}>
                        <svg width="80" height="80" viewBox="0 0 80 80">
                            <circle cx="40" cy="40" r="10" fill="#6fa8ff" stroke="#232733" strokeWidth="3"/>
                            {[0,1,2,3,4].map(i => {
                                const angle = (i * 2 * Math.PI) / 5;
                                const x = 40 + 28 * Math.cos(angle);
                                const y = 40 + 28 * Math.sin(angle);
                                return <>
                                    <circle key={'c'+i} cx={x} cy={y} r="7" fill="#b3ffd1" stroke="#232733" strokeWidth="2"/>
                                    <line key={'l'+i} x1="40" y1="40" x2={x} y2={y} stroke="#b3ffd1" strokeWidth="2"/>
                                </>;
                            })}
                        </svg>
                        <div style={{fontSize:'0.9em',color:'#b3cfff'}}>Estrella</div>
                    </div>
                    {/* Bus */}
                    <div style={{background:'#232733',padding:'1em',borderRadius:'8px',color:'#ffe6b3',minWidth:'180px',textAlign:'center'}}>
                        <svg width="80" height="80" viewBox="0 0 80 80">
                            <rect x="10" y="40" width="60" height="6" rx="3" fill="#b3ffd1" stroke="#232733" strokeWidth="2"/>
                            {[20,35,50,65].map((x,i)=>(
                                <circle key={i} cx={x} cy="43" r="6" fill="#6fa8ff" stroke="#232733" strokeWidth="2"/>
                            ))}
                        </svg>
                        <div style={{fontSize:'0.9em',color:'#b3cfff'}}>Bus</div>
                    </div>
                    {/* Anillo */}
                    <div style={{background:'#232733',padding:'1em',borderRadius:'8px',color:'#e6b3ff',minWidth:'180px',textAlign:'center'}}>
                        <svg width="80" height="80" viewBox="0 0 80 80">
                            <circle cx="40" cy="40" r="28" fill="none" stroke="#b3ffd1" strokeWidth="3"/>
                            {[0,1,2,3,4,5].map(i => {
                                const angle = (i * 2 * Math.PI) / 6;
                                const x = 40 + 28 * Math.cos(angle);
                                const y = 40 + 28 * Math.sin(angle);
                                return <circle key={i} cx={x} cy={y} r="7" fill="#6fa8ff" stroke="#232733" strokeWidth="2"/>;
                            })}
                        </svg>
                        <div style={{fontSize:'0.9em',color:'#b3cfff'}}>Anillo</div>
                    </div>
                    {/* Malla */}
                    <div style={{background:'#232733',padding:'1em',borderRadius:'8px',color:'#ae7c4e',minWidth:'180px',textAlign:'center'}}>
                        <svg width="80" height="80" viewBox="0 0 80 80">
                            {[{x:20,y:20},{x:60,y:20},{x:20,y:60},{x:60,y:60}].map((nodo,i,arr)=>(
                                <>
                                    <circle key={'c'+i} cx={nodo.x} cy={nodo.y} r="7" fill="#6fa8ff" stroke="#232733" strokeWidth="2"/>
                                    {arr.map((n2,j)=>(j>i?<line key={'l'+i+'-'+j} x1={nodo.x} y1={nodo.y} x2={n2.x} y2={n2.y} stroke="#b3ffd1" strokeWidth="2"/>:null))}
                                </>
                            ))}
                        </svg>
                        <div style={{fontSize:'0.9em',color:'#b3cfff'}}>Malla</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Soporte;