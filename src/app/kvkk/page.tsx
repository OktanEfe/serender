import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Serender Ekolojik Yaşam Derneği",
  description:
    "Serender Ekolojik Yaşam Derneği internet sitesi iletişim süreçlerine ilişkin KVKK aydınlatma metni.",
  alternates: {
    canonical: "https://www.serender.org/kvkk",
  },
  openGraph: {
    title: "KVKK Aydınlatma Metni | Serender Ekolojik Yaşam Derneği",
    description:
      "Serender Ekolojik Yaşam Derneği internet sitesi iletişim süreçlerine ilişkin KVKK aydınlatma metni.",
    url: "https://www.serender.org/kvkk",
    type: "website",
  },
  twitter: {
    title: "KVKK Aydınlatma Metni | Serender Ekolojik Yaşam Derneği",
    description:
      "Serender Ekolojik Yaşam Derneği internet sitesi iletişim süreçlerine ilişkin KVKK aydınlatma metni.",
  },
};

export default function KvkkPage() {
  return (
    <main className="pt-[100px] md:pt-[120px] pb-20 md:pb-28 bg-white">
      <section className="max-w-[980px] mx-auto px-6 md:px-8">
        <div className="mb-12 md:mb-16 space-y-5">
          <span className="block text-[10px] md:text-[11px] tracking-[0.45em] uppercase text-[#1E4D3A] font-semibold">
            KVKK
          </span>

          <h1 className="text-[38px] sm:text-[46px] md:text-[62px] font-light tracking-tighter text-[#231F20] leading-[1.04]">
            Kişisel Verilerin Korunması ve{" "}
            <span className="italic font-serif text-[#1E4D3A]">
              Aydınlatma Metni
            </span>
          </h1>

          <p className="text-[16px] md:text-[18px] text-black/45 font-light leading-relaxed max-w-3xl">
            Serender Ekolojik Yaşam Derneği olarak, internet sitemiz üzerinden
            bizimle iletişime geçtiğinizde paylaştığınız kişisel verilerinizi
            6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında hukuka
            uygun, açık ve ölçülü şekilde işlemeye özen gösteriyoruz.
          </p>
        </div>

        <div className="space-y-10 md:space-y-12 text-black/65">
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
              1. Veri Sorumlusu
            </h2>

            <p className="text-[15px] md:text-[17px] leading-8 font-light">
              İşbu aydınlatma metni kapsamında veri sorumlusu Serender Ekolojik
              Yaşam Derneği’dir.
            </p>

            <div className="p-6 md:p-8 bg-[#FAF9F6] rounded-[2rem] border border-black/[0.03] space-y-2">
              <p className="text-[15px] md:text-[16px] font-light">
                <span className="font-medium text-[#231F20]">
                  Veri Sorumlusu:
                </span>{" "}
                Serender Ekolojik Yaşam Derneği
              </p>
              <p className="text-[15px] md:text-[16px] font-light">
                <span className="font-medium text-[#231F20]">E-posta:</span>{" "}
                info@serender.org
              </p>
              <p className="text-[15px] md:text-[16px] font-light">
                <span className="font-medium text-[#231F20]">Adres:</span>{" "}
                [Dernek adresinizi buraya ekleyin]
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
              2. İşlenen Kişisel Veriler
            </h2>

            <p className="text-[15px] md:text-[17px] leading-8 font-light">
              İnternet sitemizde yer alan iletişim formu veya e-posta kanalı
              üzerinden tarafımıza iletmeniz halinde aşağıdaki kişisel
              verileriniz işlenebilir:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Ad ve soyad",
                "E-posta adresi",
                "Telefon numarası",
                "Mesaj / talep içeriği",
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 md:p-5 rounded-[1.5rem] bg-[#FAF9F6] border border-black/[0.03] text-[14px] md:text-[15px] leading-7 font-light"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
              3. Kişisel Verilerin Toplanma Yöntemi
            </h2>

            <p className="text-[15px] md:text-[17px] leading-8 font-light">
              Kişisel verileriniz, internet sitemizde yer alan iletişim formunu
              doldurmanız veya tarafımıza doğrudan e-posta göndermeniz yoluyla
              sizden elektronik ortamda toplanmaktadır.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
              4. Kişisel Verilerin İşlenme Amaçları
            </h2>

            <p className="text-[15px] md:text-[17px] leading-8 font-light">
              Tarafımıza ilettiğiniz kişisel verileriniz aşağıdaki amaçlarla
              işlenebilmektedir:
            </p>

            <ul className="space-y-3 text-[15px] md:text-[17px] leading-8 font-light">
              {[
                "İletişim taleplerinizi değerlendirmek",
                "Size geri dönüş sağlamak",
                "Sorularınızı, önerilerinizi ve başvurularınızı cevaplamak",
                "Gerekli olması halinde hukuki yükümlülükleri yerine getirmek",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#1E4D3A] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
              5. Kişisel Verilerin Hukuki Sebebi
            </h2>

            <p className="text-[15px] md:text-[17px] leading-8 font-light">
              Kişisel verileriniz; tarafınızca başlatılan iletişim sürecinin
              yürütülmesi, talebinizin değerlendirilmesi, sizinle iletişim
              kurulması ve gerektiğinde bir hakkın tesisi, kullanılması veya
              korunması amacıyla ilgili mevzuatta öngörülen hukuki sebeplere
              dayalı olarak işlenebilmektedir.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
              6. Kişisel Verilerin Aktarılması
            </h2>

            <p className="text-[15px] md:text-[17px] leading-8 font-light">
              Kişisel verileriniz, yasal yükümlülükler dışında üçüncü kişilere
              aktarılmaz. Ancak yetkili kamu kurum ve kuruluşlarının usulüne
              uygun talepleri veya ilgili mevzuattan kaynaklanan yükümlülükler
              kapsamında ilgili mercilere bilgi verilmesi gerekebilir.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
              7. Kişisel Verilerin Saklanma Süresi
            </h2>

            <p className="text-[15px] md:text-[17px] leading-8 font-light">
              Kişisel verileriniz, iletişim talebinizin sonuçlandırılması için
              gerekli süre boyunca ve ilgili mevzuattan kaynaklanan saklama
              yükümlülükleri bulunduğu ölçüde muhafaza edilir. İşlenme amacı
              sona erdiğinde ve saklanmasını gerektiren başka bir hukuki neden
              kalmadığında veriler silinir, yok edilir veya anonim hale
              getirilir.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
              8. Veri Güvenliği
            </h2>

            <p className="text-[15px] md:text-[17px] leading-8 font-light">
              Serender Ekolojik Yaşam Derneği, kişisel verilerin hukuka aykırı
              olarak işlenmesini ve yetkisiz erişimi önlemek amacıyla uygun
              teknik ve idari tedbirleri almaya özen gösterir. Bununla birlikte,
              dijital ortamların doğası gereği hiçbir sistemin tamamen risksiz
              olduğu garanti edilemez.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
              9. İlgili Kişinin Hakları
            </h2>

            <p className="text-[15px] md:text-[17px] leading-8 font-light">
              6698 sayılı Kanun uyarınca veri sorumlusuna başvurarak aşağıdaki
              haklara sahipsiniz:
            </p>

            <ul className="space-y-3 text-[15px] md:text-[17px] leading-8 font-light">
              {[
                "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
                "İşlenmişse buna ilişkin bilgi talep etme",
                "İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme",
                "Eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme",
                "Kanunda öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme",
                "Kanuna aykırı işlenmesi nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#1E4D3A] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
              10. Başvuru Usulü
            </h2>

            <p className="text-[15px] md:text-[17px] leading-8 font-light">
              KVKK kapsamındaki taleplerinizi, kimliğinizi doğrulamaya elverişli
              bilgiler ile birlikte info@serender.org adresine iletebilir veya
              ilgili mevzuatta belirtilen diğer yöntemlerle veri sorumlusuna
              başvurabilirsiniz.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
              11. Güncelleme
            </h2>

            <p className="text-[15px] md:text-[17px] leading-8 font-light">
              İşbu aydınlatma metni, mevzuat değişiklikleri veya veri işleme
              süreçlerindeki güncellemeler doğrultusunda revize edilebilir.
              Güncel metin internet sitemizde yayımlandığı tarihten itibaren
              geçerli olur.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}