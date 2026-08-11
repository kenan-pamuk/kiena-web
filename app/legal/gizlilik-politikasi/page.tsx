import type { Metadata } from "next";

import Header from "../../../components/header";
import LegalPage from "../../../components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Glowyn Gizlilik Politikası",
  description:
    "Glowyn mobil uygulamasına ilişkin gizlilik politikası ve kişisel verilerin işlenmesine dair bilgiler.",
};

const sections = [
  {
    title: "1. Toplanan Veriler ve İşlenme Amaçları",
    paragraphs: [
      "1.1. Kimlik ve İletişim Verileri",
      "Google, Apple Sign-In veya e-posta ile giriş yaptığınızda adınız, soyadınız ve e-posta adresiniz hesabınızın oluşturulması, kimliğinizin doğrulanması, uygulamaya güvenli giriş yapılması ve üyelik ilişkisinin yürütülmesi amacıyla işlenir.",

      "1.2. Takvim Verileri",
      "Takvim yönetimi ve günlük/aylık planlama özelliklerini kullanmak istediğinizde, cihazınızın takvimine erişim izni talep edilebilir. Bu izin kapsamında takvim etkinliklerinizi görüntüleme, yeni etkinlik ekleme, etkinlikleri güncelleme, silme ve hatırlatma oluşturma işlemleri yapılabilir.",
      "Takvim verileri yalnızca takvim yönetimi ve planlama özelliklerinin sunulması amacıyla işlenir. Bu veriler pazarlama, reklam veya ilgisiz profil çıkarımı amacıyla kullanılmaz. Takvim erişim iznini dilediğiniz zaman cihaz ayarlarınızdan veya uygulama içindeki gizlilik/izinler alanından geri alabilirsiniz.",

      "1.3. Görsel Veriler, Kamera ve Fotoğraflar",
      "Kilerinizdeki malzemeler, gardırobunuzdaki kıyafetler, makyaj ürünleriniz veya seçtiğiniz diğer görseller; yemek tarifi, kombin, gardırop ve makyaj önerisi sunulabilmesi amacıyla işlenebilir. Kamera ve fotoğraf erişimi yalnızca bu özelliklerin sunulması için kullanılır.",
      "Fotoğraflarınız, profilinizde veya gardırobunuzda saklamayı seçmediğiniz sürece kalıcı olarak saklanmaz. Profilinize veya gardırobunuza kaydettiğiniz görseller, ilgili öneri özelliklerinin sunulabilmesi amacıyla saklanabilir ve dilediğiniz zaman silinebilir.",
      "Fotoğraf içinde adres, sağlık bilgisi, reçete, çocuk görüntüsü veya özel hayatınıza ilişkin ayrıntılar bulunmamasına dikkat etmenizi öneririz.",

      "1.4. Gardırop ve Kıyafet Verileri",
      "Gardırop/kombin özelliğini kullanmanız halinde seçtiğiniz kıyafet fotoğrafları, size kombin önerisi sunmak amacıyla işlenir. Kılık ve kıyafet bilgilerinin hassas nitelikte olabileceği dikkate alınarak, bu veriler yalnızca ilgili özellik kapsamında ve sizin seçiminiz doğrultusunda işlenir.",
      "Yüzünüzü veya vücudunuzu içeren fotoğrafları yüklemek zorunda değilsiniz. Gardırobunuza kaydettiğiniz kıyafet fotoğraflarını dilediğiniz zaman silebilirsiniz.",

      "1.5. Makyaj ve Yüz Fotoğrafı Verileri",
      "Makyaj önerisi özelliğini kullanmanız halinde seçtiğiniz makyaj ürünü fotoğrafları veya tercih etmeniz durumunda yüz fotoğrafınız analiz edilebilir. Yüz fotoğrafınız kimlik doğrulama, yüz tanıma veya biyometrik eşleştirme amacıyla kullanılmaz.",
      "Yüz fotoğrafınızı yalnızca analiz için kullanabilir veya tercih ederseniz profilinizde/makyaj önerileri kapsamında saklayabilirsiniz. Saklanan görselleri dilediğiniz zaman silebilirsiniz.",

      "1.6. Yemek Tercihi, Alerji ve Sağlıkla Bağlantılı Bilgiler",
      "Yemek önerisi özelliği kapsamında alerji, intolerans, hamilelik, özel diyet, hastalık veya benzeri sağlıkla bağlantılı bilgileri paylaşmanız tamamen sizin tercihinize bağlıdır. Bu bilgiler, yalnızca yemek önerilerini kişiselleştirmek amacıyla ve açık rızanız kapsamında işlenir.",
      "Glowyn tarafından sunulan yemek tarifleri tıbbi veya beslenme uzmanı tavsiyesi değildir. Alerjenleri, son tüketim tarihlerini, içerik güvenliğini ve sağlık durumunuza uygunluğu ayrıca kontrol etmeniz gerekir.",

      "1.7. Yapay Zeka Komutları ve Kullanıcı İçerikleri",
      "Uygulama içinde yazdığınız metinsel komutlar, sorular ve seçtiğiniz görseller; yemek tarifi, kombin, makyaj ve planlama önerilerinin oluşturulması amacıyla işlenebilir. Bu içerikler, niteliği gereği kişisel veri veya hassas bilgi içerebilir.",
      "Sağlık, kimlik, adres, çocuklara ilişkin bilgiler, özel hayat veya gizli bilgiler içeren içerikleri uygulamaya yüklememenizi öneririz.",

      "1.8. Teknik Veriler ve Bildirim Bilgileri",
      "Uygulamanın güvenli çalışması, hata kayıtlarının incelenmesi, performansın ölçülmesi, hesap güvenliğinin sağlanması ve bildirimlerin gönderilebilmesi amacıyla cihaz türü, işletim sistemi, uygulama sürümü, hata kayıtları, oturum bilgileri ve bildirim tercihleri gibi teknik veriler işlenebilir.",
    ],
  },
  {
    title: "2. Uygulama İzinleri",
    paragraphs: [
      "Glowyn, izinleri kayıt sırasında topluca istemek yerine, ilgili özellik kapsamında ihtiyaç doğduğunda talep eder. İzin verdikten sonra, izin geri alınana kadar ilgili özellik ve belirtilen amaç kapsamında veri işlenebilir.",
      "Takvim, kamera, fotoğraf, bildirim, sağlık/alerji bilgisi, gardırop/kıyafet verisi ve AI önerilerine ilişkin tercihlerinizi uygulama ayarlarından veya cihaz ayarlarından değiştirebilirsiniz.",
    ],
  },
  {
    title: "3. Yapay Zeka Altyapısı ve Üçüncü Taraf Hizmet Sağlayıcılar",
    paragraphs: [
      "Glowyn, size öneriler sunabilmek için yapay zeka altyapılarından ve üçüncü taraf hizmet sağlayıcılardan yararlanabilir. Yapay zeka sağlayıcılarına adınız, soyadınız ve e-posta adresiniz gibi doğrudan hesap kimlik bilgileriniz gönderilmez.",
      "Yapay zeka önerileri üretilebilmesi için yazdığınız komutlar ve seçtiğiniz görseller, doğrudan hesap kimlik bilgilerinizden ayrıştırılarak hizmet alınan yapay zeka sağlayıcıları üzerinden işlenebilir. Bu veriler yalnızca yemek tarifi, kombin, makyaj ve planlama önerileri sunmak amacıyla kullanılır.",
      "Kiena, hizmet aldığı yapay zeka ve teknik hizmet sağlayıcılarla veri güvenliği, saklama, loglama, model eğitimi için kullanım, alt işleyenler ve yurt dışı aktarım şartlarını sözleşmesel ve teknik tedbirlerle sınırlandırır.",
    ],
  },
  {
    title: "4. Verilerin Aktarılması",
    paragraphs: [
      "Kişisel verileriniz, uygulamanın çalışması, kimlik doğrulama, hata ve güvenlik yönetimi, bildirim gönderimi, barındırma hizmetleri ve yapay zeka önerilerinin oluşturulması gibi amaçlarla sınırlı olarak hizmet sağlayıcılarla paylaşılabilir.",
      "Yapay zeka sağlayıcısı veya diğer hizmet sağlayıcıların yurt dışında bulunması halinde, kişisel verileriniz KVKK’da öngörülen yurt dışına aktarım şartlarına uygun şekilde aktarılabilir.",
      "Kişisel verileriniz, yetkili kamu kurum ve kuruluşları tarafından usulüne uygun şekilde talep edilmesi halinde, ilgili mevzuat kapsamında paylaşılabilir.",
    ],
  },
  {
    title: "5. Veri Saklama Süreleri",
    paragraphs: [
      "Kişisel verileriniz, işleme amacı için gerekli süre boyunca saklanır. Hesap bilgileriniz hesabınız aktif olduğu sürece; profilinize veya gardırobunuza kaydettiğiniz görseller siz silene, hesabınızı kapatana veya saklama amacı sona erene kadar; rıza kayıtlarınız hukuki yükümlülükler ve ispat amacıyla gerekli süre boyunca; hata ve güvenlik logları ise güvenlik ve sistem bütünlüğü amacıyla sınırlı süreyle saklanabilir.",
      "Takvim verileriniz harici sunucularımızda kalıcı olarak saklanmaz. Takvim işlemleri, ilgili özelliğin çalışması için gerekli olan kapsamda yürütülür.",
    ],
  },
  {
    title: "6. Hesap Silme ve Rızaların Geri Alınması",
    paragraphs: [
      "Hesabınızı uygulama içindeki Ayarlar > Hesabımı Sil menüsünden silebilirsiniz. Hesap silme talebinizin tamamlanmasıyla, hesabınıza bağlı kişisel veriler tamamiyle silinir ve yok edilir. Kanunen saklanması gereken sınırlı kayıtlar, yalnızca ilgili yasal süre boyunca ve sınırlı amaçlarla saklanabilir.",
      "Ayrıca hesabınızı silmeden de takvim, kamera/fotoğraf, AI önerileri, bildirimler, sağlık/alerji bilgileri ve diğer uygulama izinlerine ilişkin tercihlerinizi uygulama ayarlarından veya cihaz ayarlarından değiştirebilirsiniz.",
    ],
  },
  {
    title: "7. Veri Güvenliği",
    paragraphs: [
      "Kiena, kişisel verilerinizin hukuka aykırı işlenmesini, yetkisiz erişimini, kaybını veya kötüye kullanımını önlemek için gerekli teknik ve idari tedbirleri alır. Bu kapsamda erişim yetkilendirme, şifreleme, loglama, güvenli aktarım, sınırlı erişim ve düzenli güvenlik kontrolleri uygulanabilir.",
    ],
  },
  {
    title: "8. İletişim",
    paragraphs: [
      "Gizlilik Politikası, kişisel verileriniz veya hesap silme taleplerinizle ilgili sorularınız için destek@kiena.com.tr adresinden Kiena ile iletişime geçebilirsiniz.",
    ],
  },
];

export default function PrivacyPage() {
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
            title="Glowyn Gizlilik Politikası"
            intro={[
              "Kiena, kullanıcılarının gizliliğine önem verir. Bu Gizlilik Politikası, Glowyn mobil uygulamasını kullandığınızda kişisel verilerinizin hangi amaçlarla toplandığını, işlendiğini, aktarıldığını, saklandığını ve bu verilere ilişkin haklarınızı açıklar.",
              "Glowyn; günlük planlama, takvim yönetimi, yapay zeka destekli yemek tarifi, gardırop/kombin ve makyaj önerileri sunan bir mobil uygulamadır. Uygulamanın bazı özellikleri, kullanıcının seçimine ve verdiği izinlere bağlı olarak çalışır.",
            ]}
            sections={sections}
          />
        </main>
      </div>
    </div>
  );
}
