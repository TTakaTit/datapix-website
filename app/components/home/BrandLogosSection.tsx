import Image from 'next/image';
import veroxLogo from '@/assets/brand-logo/Verox-Baumarkt-logo.svg';
import gomopaLogo from '@/assets/brand-logo/gomopa-logo.svg';
import hdhotelLogo from '@/assets/brand-logo/hdhotel-logo.svg';
import kolnLogo from '@/assets/brand-logo/koln-white-logo.svg';
import mkgLogo from '@/assets/brand-logo/mkg-quantenhaus-Briefumschlaglogo.svg';
import quarevesLogo from '@/assets/brand-logo/quareves-logo.svg';

const brandLogos = [
  { src: veroxLogo, alt: 'Verox Baumarkt' },
  { src: gomopaLogo, alt: 'Gomopa' },
  { src: hdhotelLogo, alt: 'HD Hotel' },
  { src: kolnLogo, alt: 'Köln' },
  { src: mkgLogo, alt: 'MKG Quantenhaus' },
  { src: quarevesLogo, alt: 'Quareves' },
];

export function BrandLogosSection() {
  return (
    <section className="w-full">
      <div className=" py-16 sm:py-24 overflow-hidden border border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 items-center justify-items-center">
            {brandLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center w-full max-w-[180px] h-16 sm:h-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
