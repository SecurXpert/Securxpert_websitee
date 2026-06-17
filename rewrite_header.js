const fs = require('fs');
let content = fs.readFileSync('src/components/Header.js', 'utf8');

// 1. Add state and ref
content = content.replace(
  'import React, { useState, useEffect } from "react";',
  'import React, { useState, useEffect, useRef } from "react";'
);

content = content.replace(
  'const [mounted, setMounted] = useState(false);',
  'const [mounted, setMounted] = useState(false);\n  const [openDropdown, setOpenDropdown] = useState(null);\n  const headerRef = useRef(null);'
);

content = content.replace(
  '  if (pathname === "/Carrers/create") return null;\n',
  `  if (pathname === "/Carrers/create") return null;\n\n  useEffect(() => {\n    const handleClickOutside = (event) => {\n      if (headerRef.current && !headerRef.current.contains(event.target)) {\n        setOpenDropdown(null);\n      }\n    };\n    document.addEventListener("mousedown", handleClickOutside);\n    return () => document.removeEventListener("mousedown", handleClickOutside);\n  }, []);\n`
);

content = content.replace(
  '    setMobileMenuOpen(false);\n  }, [pathname]);',
  '    setMobileMenuOpen(false);\n    setOpenDropdown(null);\n  }, [pathname]);'
);

content = content.replace(
  '<header\n      className=',
  '<header\n      ref={headerRef}\n      className='
);

// 2. Transform the Services dropdown
content = content.replace(
  /<div className="relative group py-2">\s*<Link\s*href="\/services"([\s\S]*?)Services\s*<svg[\s\S]*?<\/svg>\s*<\/Link>\s*\{\/\* Dropdown Menu - Sleek glassmorphism style \*\/\}\s*<div className="absolute left-1\/2 -translate-x-1\/2 top-full mt-1 w-56 bg-white\/95 backdrop-blur-md rounded-2xl p-2 border border-slate-100 shadow-\[0_12px_30px_rgba\(0,0,0,0\.06\)\] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-50">/g,
  `{/* Services Dropdown */}
            <div className="relative py-2 flex items-center" onMouseLeave={() => setOpenDropdown(null)}>
              <Link
                href="/services"$1Services
              </Link>
              <button
                onMouseEnter={() => setOpenDropdown("services")}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenDropdown(openDropdown === "services" ? null : "services");
                }}
                className={\`ml-1 p-1 pb-1.5 flex items-center justify-center outline-none \${isDarkBg ? "text-white/60 hover:text-white" : "text-slate-500 hover:text-blue-600"}\`}
              >
                <svg
                  className={\`w-3 h-3 transition-transform duration-200 \${openDropdown === "services" ? "rotate-180" : ""}\`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className={\`absolute left-1/2 -translate-x-1/2 top-full mt-1 w-56 bg-white/95 backdrop-blur-md rounded-2xl p-2 border border-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out z-50 \${openDropdown === "services" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}\`}>`
);

// 3. Transform the Products dropdown
content = content.replace(
  /<div className="relative group py-2">\s*<Link\s*href="\/products"([\s\S]*?)Products\s*<svg[\s\S]*?<\/svg>\s*<\/Link>\s*\{\/\* Dropdown Menu - Sleek glassmorphism style \*\/\}\s*<div className="absolute left-1\/2 -translate-x-1\/2 top-full mt-1 w-56 bg-white\/95 backdrop-blur-md rounded-2xl p-2 border border-slate-100 shadow-\[0_12px_30px_rgba\(0,0,0,0\.06\)\] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-50">/g,
  `{/* Products Dropdown */}
            <div className="relative py-2 flex items-center" onMouseLeave={() => setOpenDropdown(null)}>
              <Link
                href="/products"$1Products
              </Link>
              <button
                onMouseEnter={() => setOpenDropdown("products")}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenDropdown(openDropdown === "products" ? null : "products");
                }}
                className={\`ml-1 p-1 pb-1.5 flex items-center justify-center outline-none \${isDarkBg ? "text-white/60 hover:text-white" : "text-slate-500 hover:text-blue-600"}\`}
              >
                <svg
                  className={\`w-3 h-3 transition-transform duration-200 \${openDropdown === "products" ? "rotate-180" : ""}\`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className={\`absolute left-1/2 -translate-x-1/2 top-full mt-1 w-56 bg-white/95 backdrop-blur-md rounded-2xl p-2 border border-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out z-50 \${openDropdown === "products" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}\`}>`
);

// 4. Transform the About Us dropdown
content = content.replace(
  /<div className="relative group py-2">\s*<Link\s*href="\/AboutUs"([\s\S]*?)About Us\s*<svg[\s\S]*?<\/svg>\s*<\/Link>\s*\{\/\* Dropdown Menu[\s\S]*?\*\/\}\s*<div className="absolute left-1\/2 -translate-x-1\/2 top-full mt-1 w-48 bg-white\/95 backdrop-blur-md rounded-2xl p-2 border border-slate-100 shadow-\[0_12px_30px_rgba\(0,0,0,0\.06\)\] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-50">/g,
  `{/* About Us Dropdown */}
            <div className="relative py-2 flex items-center" onMouseLeave={() => setOpenDropdown(null)}>
              <Link
                href="/AboutUs"$1About Us
              </Link>
              <button
                onMouseEnter={() => setOpenDropdown("aboutus")}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenDropdown(openDropdown === "aboutus" ? null : "aboutus");
                }}
                className={\`ml-1 p-1 pb-1.5 flex items-center justify-center outline-none \${isDarkBg ? "text-white/60 hover:text-white" : "text-slate-500 hover:text-blue-600"}\`}
              >
                <svg
                  className={\`w-3 h-3 transition-transform duration-200 \${openDropdown === "aboutus" ? "rotate-180" : ""}\`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className={\`absolute left-1/2 -translate-x-1/2 top-full mt-1 w-48 bg-white/95 backdrop-blur-md rounded-2xl p-2 border border-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out z-50 \${openDropdown === "aboutus" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}\`}>`
);

// 5. Apply the internal links with arrows
const targetClass = 'block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150';
const newClass = 'flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item';
const svgArrow = \`<svg className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>\`;

const regex1 = /<Link href="([^"]+)" className="block px-4 py-2\.5 rounded-xl text-\[13px\] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50\/50 transition-all duration-150">([^<]+)<\/Link>/g;
content = content.replace(regex1, (match, href, text) => {
  return \`<Link href="\${href}" className="\${newClass}">
                  \${text.trim()}
                  \${svgArrow}
                </Link>\`;
});

const regex2 = /<Link\s+href="([^"]+)"\s+className="block px-4 py-2\.5 rounded-xl text-\[13px\] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50\/50 transition-all duration-150"\s*>\s*([^<]+)\s*<\/Link>/g;
content = content.replace(regex2, (match, href, text) => {
  return \`<Link href="\${href}" className="\${newClass}">
                  \${text.trim()}
                  \${svgArrow}
                </Link>\`;
});

fs.writeFileSync('src/components/Header.js', content);
console.log('Restored state and added hover logic');
