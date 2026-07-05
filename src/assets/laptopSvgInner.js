// Raw SVG markup for the decorative hero laptop illustration.
// Kept as a verbatim string (rendered via dangerouslySetInnerHTML) rather
// than converted attribute-by-attribute to JSX, since it's a large,
// purely-decorative, static, aria-hidden vector graphic with no user data.
const laptopSvgInner = `
                            <defs>
                                <linearGradient id="lidTop" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1E2235"/><stop offset="100%" stop-color="#141728"/></linearGradient>
                                <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0D0F1A"/><stop offset="100%" stop-color="#070810"/></linearGradient>
                                <linearGradient id="baseTop" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1A1E30"/><stop offset="100%" stop-color="#101320"/></linearGradient>
                                <linearGradient id="glowLine" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="transparent"/><stop offset="30%" stop-color="#6D28D9"/><stop offset="70%" stop-color="#22D3EE"/><stop offset="100%" stop-color="transparent"/></linearGradient>
                                <linearGradient id="screenShine" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="rgba(255,255,255,0.04)"/><stop offset="100%" stop-color="transparent"/></linearGradient>
                                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                                <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                                <clipPath id="screenClip"><rect x="46" y="14" width="208" height="135" rx="3"/></clipPath>
                            </defs>
                            <rect x="30" y="8" width="240" height="155" rx="10" fill="url(#lidTop)" stroke="rgba(109,40,217,0.35)" stroke-width="1"/>
                            <rect x="34" y="12" width="232" height="147" rx="8" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.04)" stroke-width="0.5"/>
                            <rect x="38" y="12" width="224" height="147" rx="7" fill="#090B13" stroke="rgba(109,40,217,0.15)" stroke-width="0.5"/>
                            <rect x="46" y="14" width="208" height="135" rx="3" fill="url(#screenGrad)"/>
                            <rect x="46" y="14" width="208" height="135" rx="3" fill="url(#screenShine)"/>
                            <rect x="46" y="14" width="208" height="18" rx="0" fill="rgba(255,255,255,0.03)"/>
                            <circle cx="59" cy="23" r="3.5" fill="#FF5F56"/>
                            <circle cx="71" cy="23" r="3.5" fill="#FFBD2E"/>
                            <circle cx="83" cy="23" r="3.5" fill="#27C93F"/>
                            <rect x="95" y="16" width="60" height="14" rx="2" fill="rgba(109,40,217,0.15)" stroke="rgba(109,40,217,0.2)" stroke-width="0.5"/>
                            <rect x="99" y="20" width="40" height="2" rx="1" fill="rgba(109,40,217,0.5)"/>
                            <rect x="99" y="25" width="28" height="2" rx="1" fill="rgba(34,211,238,0.4)"/>
                            <rect x="46" y="32" width="14" height="117" fill="rgba(0,0,0,0.2)"/>
                            <rect x="49" y="38" width="6" height="1.5" rx="1" fill="rgba(255,255,255,0.12)"/>
                            <rect x="49" y="46" width="6" height="1.5" rx="1" fill="rgba(255,255,255,0.12)"/>
                            <rect x="49" y="54" width="6" height="1.5" rx="1" fill="rgba(255,255,255,0.12)"/>
                            <rect x="49" y="62" width="6" height="1.5" rx="1" fill="rgba(255,255,255,0.12)"/>
                            <rect x="49" y="70" width="6" height="1.5" rx="1" fill="rgba(255,255,255,0.12)"/>
                            <rect x="49" y="78" width="6" height="1.5" rx="1" fill="rgba(255,255,255,0.12)"/>
                            <rect x="49" y="86" width="6" height="1.5" rx="1" fill="rgba(255,255,255,0.12)"/>
                            <rect x="49" y="94" width="6" height="1.5" rx="1" fill="rgba(255,255,255,0.12)"/>
                            <rect x="49" y="102" width="6" height="1.5" rx="1" fill="rgba(255,255,255,0.12)"/>
                            <rect x="49" y="110" width="6" height="1.5" rx="1" fill="rgba(255,255,255,0.12)"/>
                            <rect x="49" y="118" width="6" height="1.5" rx="1" fill="rgba(255,255,255,0.12)"/>
                            <rect x="49" y="126" width="6" height="1.5" rx="1" fill="rgba(255,255,255,0.12)"/>
                            <rect x="49" y="134" width="6" height="1.5" rx="1" fill="rgba(255,255,255,0.12)"/>
                            <rect x="49" y="142" width="6" height="1.5" rx="1" fill="rgba(255,255,255,0.12)"/>
                            <rect x="64" y="37" width="18" height="2.5" rx="1" fill="#8B5CF6"/>
                            <rect x="85" y="37" width="30" height="2.5" rx="1" fill="#22D3EE"/>
                            <rect x="118" y="37" width="8" height="2.5" rx="1" fill="rgba(255,255,255,0.25)"/>
                            <rect x="64" y="45" width="12" height="2.5" rx="1" fill="#6D28D9"/>
                            <rect x="80" y="45" width="22" height="2.5" rx="1" fill="#86EFAC"/>
                            <rect x="105" y="45" width="16" height="2.5" rx="1" fill="rgba(255,255,255,0.2)"/>
                            <rect x="124" y="45" width="24" height="2.5" rx="1" fill="#FCD34D"/>
                            <rect x="68" y="53" width="8" height="2.5" rx="1" fill="#D8B4FE"/>
                            <rect x="80" y="53" width="32" height="2.5" rx="1" fill="rgba(255,255,255,0.2)"/>
                            <rect x="116" y="53" width="18" height="2.5" rx="1" fill="#22D3EE"/>
                            <rect x="68" y="61" width="14" height="2.5" rx="1" fill="#8B5CF6"/>
                            <rect x="86" y="61" width="44" height="2.5" rx="1" fill="rgba(255,255,255,0.15)"/>
                            <rect x="64" y="69" width="20" height="2.5" rx="1" fill="#86EFAC"/>
                            <rect x="88" y="69" width="12" height="2.5" rx="1" fill="rgba(255,255,255,0.25)"/>
                            <rect x="104" y="69" width="28" height="2.5" rx="1" fill="#FCD34D"/>
                            <rect x="60" y="76" width="188" height="9" rx="1" fill="rgba(109,40,217,0.08)"/>
                            <rect x="64" y="78" width="10" height="2.5" rx="1" fill="#22D3EE"/>
                            <rect x="78" y="78" width="26" height="2.5" rx="1" fill="#D8B4FE"/>
                            <rect x="108" y="78" width="8" height="2.5" rx="1" fill="rgba(255,255,255,0.3)"/>
                            <rect x="120" y="77" width="1.5" height="5" rx="0.5" fill="#22D3EE" opacity="0.9"><animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/></rect>
                            <rect x="64" y="93" width="16" height="2.5" rx="1" fill="#6D28D9"/>
                            <rect x="84" y="93" width="36" height="2.5" rx="1" fill="rgba(255,255,255,0.15)"/>
                            <rect x="64" y="101" width="12" height="2.5" rx="1" fill="#8B5CF6"/>
                            <rect x="80" y="101" width="20" height="2.5" rx="1" fill="#86EFAC"/>
                            <rect x="64" y="109" width="40" height="2.5" rx="1" fill="rgba(255,255,255,0.1)"/>
                            <rect x="68" y="117" width="22" height="2.5" rx="1" fill="#FCD34D"/>
                            <rect x="94" y="117" width="14" height="2.5" rx="1" fill="rgba(255,255,255,0.2)"/>
                            <rect x="112" y="117" width="30" height="2.5" rx="1" fill="#22D3EE"/>
                            <rect x="64" y="125" width="8" height="2.5" rx="1" fill="#8B5CF6"/>
                            <rect x="76" y="125" width="18" height="2.5" rx="1" fill="rgba(255,255,255,0.15)"/>
                            <rect x="64" y="133" width="26" height="2.5" rx="1" fill="#86EFAC"/>
                            <rect x="94" y="133" width="10" height="2.5" rx="1" fill="rgba(255,255,255,0.2)"/>
                            <rect x="108" y="133" width="20" height="2.5" rx="1" fill="#D8B4FE"/>
                            <rect x="46" y="140" width="208" height="9" rx="0" fill="rgba(109,40,217,0.12)"/>
                            <rect x="50" y="143" width="18" height="2" rx="1" fill="#6D28D9" opacity="0.7"/>
                            <rect x="72" y="143" width="12" height="2" rx="1" fill="#22D3EE" opacity="0.5"/>
                            <rect x="220" y="143" width="8" height="2" rx="1" fill="#86EFAC" opacity="0.6"/>
                            <rect x="232" y="143" width="18" height="2" rx="1" fill="rgba(255,255,255,0.2)"/>
                            <rect x="46" y="147" width="208" height="2" rx="0" fill="url(#glowLine)" opacity="0.6" filter="url(#glow)"/>
                            <circle cx="150" cy="10" r="2" fill="#1A1E30" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
                            <circle cx="150" cy="10" r="0.8" fill="rgba(34,211,238,0.5)"/>
                            <rect x="55" y="160" width="190" height="5" rx="2.5" fill="#0D0F18" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
                            <rect x="55" y="161" width="190" height="1" rx="0.5" fill="url(#glowLine)" opacity="0.4"/>
                            <rect x="20" y="165" width="260" height="70" rx="8" fill="url(#baseTop)" stroke="rgba(109,40,217,0.25)" stroke-width="1"/>
                            <rect x="24" y="168" width="252" height="4" rx="2" fill="rgba(0,0,0,0.3)"/>
                            <rect x="30" y="170" width="240" height="48" rx="5" fill="#0A0C14" stroke="rgba(255,255,255,0.04)" stroke-width="0.5"/>
                            <rect x="34" y="174" width="8" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="44" y="174" width="8" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="54" y="174" width="8" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="64" y="174" width="8" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="76" y="174" width="8" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="86" y="174" width="8" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="96" y="174" width="8" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="106" y="174" width="8" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="118" y="174" width="8" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="128" y="174" width="8" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="138" y="174" width="8" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="148" y="174" width="8" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="158" y="174" width="8" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="168" y="174" width="8" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="180" y="174" width="8" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="190" y="174" width="8" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="200" y="174" width="8" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="210" y="174" width="8" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="220" y="174" width="8" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="252" y="174" width="14" height="5" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="34" y="182" width="12" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="48" y="182" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(109,40,217,0.2)" stroke-width="0.5"/>
                            <rect x="58" y="182" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="68" y="182" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="78" y="182" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="88" y="182" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="98" y="182" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="108" y="182" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="118" y="182" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="128" y="182" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="138" y="182" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="148" y="182" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="158" y="182" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="168" y="182" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="178" y="182" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="188" y="182" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="198" y="182" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="208" y="182" width="18" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="34" y="191" width="14" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="50" y="191" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(34,211,238,0.25)" stroke-width="0.5"/>
                            <rect x="60" y="191" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="70" y="191" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="80" y="191" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="90" y="191" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="100" y="191" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="110" y="191" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="120" y="191" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="130" y="191" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="140" y="191" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="150" y="191" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="160" y="191" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="170" y="191" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="180" y="191" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="190" y="191" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="200" y="191" width="26" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="34" y="200" width="20" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="56" y="200" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="66" y="200" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="76" y="200" width="100" height="6" rx="1.5" fill="#12142A" stroke="rgba(109,40,217,0.4)" stroke-width="0.6"/>
                            <rect x="78" y="202" width="96" height="1.5" rx="0.75" fill="url(#glowLine)" opacity="0.3"/>
                            <rect x="178" y="200" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="188" y="200" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="198" y="200" width="8" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="208" y="200" width="18" height="6" rx="1.5" fill="#131625" stroke="rgba(255,255,255,0.07)" stroke-width="0.4"/>
                            <rect x="110" y="210" width="80" height="18" rx="4" fill="#0E1020" stroke="rgba(109,40,217,0.18)" stroke-width="0.8"/>
                            <rect x="112" y="211" width="76" height="1.5" rx="0.75" fill="rgba(109,40,217,0.1)"/>
                            <rect x="20" y="230" width="260" height="5" rx="4" fill="#0D0F18" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/>
                            <rect x="276" y="185" width="4" height="8" rx="1" fill="#0D0F18" stroke="rgba(34,211,238,0.3)" stroke-width="0.5"/>
                            <rect x="276" y="196" width="4" height="5" rx="1" fill="#0D0F18" stroke="rgba(109,40,217,0.25)" stroke-width="0.5"/>
                            <rect x="20" y="185" width="4" height="8" rx="1" fill="#0D0F18" stroke="rgba(34,211,238,0.25)" stroke-width="0.5"/>
                            <rect x="20" y="196" width="4" height="5" rx="1" fill="#0D0F18" stroke="rgba(109,40,217,0.2)" stroke-width="0.5"/>
                            <rect x="46" y="14" width="208" height="135" rx="3" fill="none" stroke="rgba(109,40,217,0.18)" stroke-width="1" filter="url(#softGlow)"/>
                            <rect x="30" y="8" width="240" height="1.5" rx="1" fill="rgba(255,255,255,0.07)"/>
                            <rect x="22" y="229" width="256" height="1" rx="0.5" fill="rgba(255,255,255,0.05)"/>
`;

export default laptopSvgInner;
