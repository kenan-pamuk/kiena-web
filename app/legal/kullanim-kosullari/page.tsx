import type { Metadata } from "next";

import Header from "../../../components/header";
import LegalPage from "../../../components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Glowyn Kullanım Koşulları",
  description:
    "Glowyn Kullanım Koşulları ve Son Kullanıcı Lisans Sözleşmesi.",
};

const sections = [
  {
    title: "1. Hizmetin Tanımı",
    paragraphs: [
      "Glowyn, günlük planlama, takvim yönetimi, yapay zeka destekli yemek tarifi, gardırop/kombin ve makyaj önerileri sunan bir mobil uygulamadır. Uygulama, kullanıcının tercihleri, verdiği izinler ve yüklediği içerikler doğrultusunda kişiselleştirilmiş öneriler üretebilir.",
      "Uygulamanın bazı özellikleri takvim, kamera, fotoğraf, bildirim, AI analizi, gardırop/kıyafet verileri veya sağlık/alerji bilgileri gibi izinlere bağlı olarak çalışır. Kullanıcı bu izinleri vermediğinde ilgili özellikten yararlanamayabilir; ancak uygulamanın diğer özelliklerini kullanmaya devam edebilir.",
    ],
  },
  {
    title: "2. Lisans",
    paragraphs: [
      "Kiena, kullanıcıya Glowyn uygulamasını kişisel ve ticari olmayan amaçlarla kullanmak üzere devredilemez, alt lisans verilemez, sınırlı ve geri alınabilir bir kullanım hakkı tanır.",
      "Uygulamanın yazılımı, tasarımı, marka unsurları, metinleri, arayüzleri ve diğer tüm fikri mülkiyet hakları Kiena’ya veya ilgili hak sahiplerine aittir. Kullanıcı, uygulamayı yalnızca bu koşullara uygun şekilde kullanabilir.",
    ],
  },
  {
    title: "3. Hesap Oluşturma ve Hesap Güvenliği",
    paragraphs: [
      "Kullanıcı, e-posta, Google veya Apple hesabı aracılığıyla Glowyn hesabı oluşturabilir. Hesap bilgilerinin doğru ve güncel tutulması kullanıcının sorumluluğundadır.",
      "Google veya Apple hesaplarının güvenliği kullanıcıya aittir. Hesabın yetkisiz kullanıldığının fark edilmesi halinde, kullanıcı mümkün olan en kısa sürede Kiena ile iletişime geçmelidir.",
    ],
  },
  {
    title: "4. Kullanıcı İçerikleri ve Uygulama İzinleri",
    paragraphs: [
      "Kullanıcı, uygulamaya yüklediği metin, fotoğraf, kıyafet, makyaj ürünü, kiler ürünü, takvim bilgisi, alerji/diyet bilgisi ve benzeri içeriklerden sorumludur.",
      "Kullanıcı, uygulamaya adres, kimlik belgesi, çocuk görüntüsü, reçete, sağlık belgesi, gizli bilgi veya özel hayatına ilişkin gereksiz ayrıntılar içeren içerikler yüklememeye özen göstermelidir.",
      "Uygulama, ilgili özellik kapsamında ihtiyaç doğduğunda takvim, kamera, fotoğraf, bildirim veya benzeri izinleri talep edebilir. Verilen izinler, kullanıcı tarafından geri alınana kadar yalnızca ilgili amaç ve özellik kapsamında kullanılabilir.",
    ],
  },
  {
    title: "5. Yapay Zeka Çıktıları",
    paragraphs: [
      "Glowyn tarafından sunulan yemek tarifi, kombin, makyaj ve planlama önerileri yapay zeka destekli olarak oluşturulur. Bu öneriler yalnızca bilgilendirme, kişisel kullanım ve kullanıcı deneyimini kolaylaştırma amaçlıdır.",
      "Yapay zeka çıktıları profesyonel tıbbi, beslenme, sağlık, güvenlik, hukuki, finansal veya benzeri uzman tavsiyesi yerine geçmez. Kullanıcı, AI çıktılarının doğruluğunu, güvenliğini ve kendi koşullarına uygunluğunu ayrıca kontrol etmekle yükümlüdür.",
      "Kiena, yapay zeka tarafından oluşturulan önerilerin her zaman doğru, eksiksiz, güvenli, güncel veya kullanıcının özel durumuna uygun olacağını garanti etmez.",
    ],
  },
  {
    title: "6. Yemek Tarifleri, Alerjenler ve Sağlık Uyarısı",
    paragraphs: [
      "Glowyn tarafından sunulan yemek tarifleri, kullanıcının paylaştığı malzeme fotoğrafları, tercihler ve diğer bilgiler doğrultusunda oluşturulabilir. Kullanıcı, tariflerde yer alan malzemelerin alerjen etkilerini, son tüketim tarihlerini, ürün güvenliğini ve sağlık durumuna uygunluğunu ayrıca kontrol etmelidir.",
      "Alerji, intolerans, hamilelik, hastalık, özel diyet veya benzeri sağlıkla bağlantılı bilgilerin paylaşılması kullanıcının tercihine bağlıdır. Bu bilgilerin paylaşılması halinde, öneriler yalnızca kişiselleştirme amacıyla kullanılabilir.",
    ],
  },
  {
    title: "7. Gardırop, Kombin ve Makyaj Önerileri",
    paragraphs: [
      "Glowyn, kullanıcının seçtiği kıyafet, gardırop, makyaj ürünü veya yüz fotoğrafları üzerinden kombin ve makyaj önerileri sunabilir. Kullanıcı, yüzünü veya vücudunu içeren fotoğrafları yüklemek zorunda değildir.",
      "Makyaj veya yüz fotoğrafı analizi, kimlik doğrulama, yüz tanıma veya biyometrik eşleştirme amacıyla kullanılmaz. Kullanıcı, yüklediği veya kaydettiği görselleri dilediği zaman silebilir.",
    ],
  },
  {
    title: "8. Üçüncü Taraf Hizmetler",
    paragraphs: [
      "Glowyn; kimlik doğrulama, bulut altyapısı, hata ve performans izleme, bildirim gönderimi ve yapay zeka önerilerinin oluşturulması gibi amaçlarla üçüncü taraf hizmet sağlayıcılardan yararlanabilir.",
      "Üçüncü taraf hizmetlerin kullanımı sırasında işlenen veriler, yalnızca ilgili hizmetin sunulması için gerekli kapsamda işlenir. Üçüncü taraf hizmet sağlayıcıların kendi hizmet koşulları ve gizlilik uygulamaları da geçerli olabilir.",
    ],
  },
  {
    title: "9. Yasaklı Kullanımlar",
    paragraphs: [
      "Kullanıcı uygulamayı hukuka aykırı, yanıltıcı, zarar verici, güvenlik sistemlerini aşmaya yönelik veya üçüncü kişilerin haklarını ihlal edecek şekilde kullanamaz.",
      "Kullanıcı, uygulama altyapısına müdahale edemez, tersine mühendislik yapamaz, otomatik sorgu veya kötüye kullanım oluşturamaz, başkasına ait verileri izinsiz yükleyemez veya uygulamayı ticari amaçla yeniden satamaz.",
    ],
  },
  {
    title: "10. Hesabın Askıya Alınması ve Sona Erme",
    paragraphs: [
      "Kiena, bu Kullanım Koşullarına aykırı kullanım, güvenlik riski, kötüye kullanım, hukuka aykırı içerik yüklenmesi veya uygulama altyapısına zarar verilmesi halinde kullanıcının hesabını askıya alabilir veya sonlandırabilir.",
      "Kullanıcı, hesabını uygulama içindeki Ayarlar > Hesabımı Sil menüsünden silebilir. Hesap silme talebinin tamamlanmasıyla kişisel veriler, Gizlilik Politikası ve KVKK Aydınlatma Metni kapsamında belirtilen esaslara göre silinir, yok edilir veya anonim hale getirilir.",
    ],
  },
  {
    title: "11. Sorumluluğun Sınırlandırılması",
    paragraphs: [
      "Glowyn, uygulamanın kesintisiz, hatasız veya her cihazda aynı şekilde çalışacağını garanti etmez. Uygulama, kullanıcı deneyimini kolaylaştırmak amacıyla sunulan bir dijital asistan niteliğindedir.",
      "Kullanıcı, uygulama tarafından sunulan önerileri kendi değerlendirmesiyle kullanır. Kiena, kullanıcının AI çıktıları doğrultusunda aldığı kararlar, tercih ettiği tarifler, kombinler, makyaj uygulamaları veya planlama sonuçlarından doğabilecek dolaylı zararlardan sorumlu tutulamaz.",
    ],
  },
  {
    title: "12. Değişiklikler",
    paragraphs: [
      "Kiena, uygulamanın özelliklerinde, bu Kullanım Koşullarında veya ilgili politikalarında değişiklik yapabilir. Önemli değişiklikler uygulama içinden veya uygun iletişim kanalları üzerinden kullanıcılara duyurulabilir.",
    ],
  },
  {
    title: "13. Uygulanacak Hukuk ve İletişim",
    paragraphs: [
      "Bu kullanım koşulları, Türk Hukukuna tabidir. Uygulama ve bu koşullarla ilgili sorularınız için destek@kiena.com.tr adresinden Kiena ile iletişime geçebilirsiniz.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="glowyn-page">
      <div className="glowyn-background" aria-hidden="true">
        <div className="glowyn-background-orb glowyn-background-orb-left" />
        <div className="glowyn-background-orb glowyn-background-orb-right" />
        <div className="glowyn-background-grid" />
      </div>

      <div className="glowyn-page-container">
        <Header />

        <main className="glowyn-main">
          <LegalPage
            eyebrow="YASAL"
            title="Glowyn Kullanım Koşulları ve Son Kullanıcı Lisans Sözleşmesi"
            intro={[
              "Bu Kullanım Koşulları ve Son Kullanıcı Lisans Sözleşmesi, Glowyn mobil uygulamasını indiren, kullanan veya uygulamada hesap oluşturan tüm kullanıcılar için geçerlidir. Uygulamayı kullanarak bu koşulları kabul etmiş olursunuz.",
            ]}
            sections={sections}
          />
        </main>
      </div>
    </div>
  );
}
