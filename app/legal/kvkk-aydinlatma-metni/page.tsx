import type { Metadata } from "next";

import Header from "../../../components/header";
import LegalPage from "../../../components/legal/LegalPage";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "Kiena 6698 Sayılı KVKK Kapsamında Aydınlatma Metni.",
};

const sections = [
  {
    title: "1. Veri Sorumlusu",
    paragraphs: [
      "Kişisel verileriniz bakımından veri sorumlusu Kiena’dır. KVKK kapsamındaki başvurularınızı destek@kiena.com.tr adresi üzerinden Kiena’ya iletebilirsiniz.",
    ],
  },
  {
    title: "2. İşlenen Kişisel Veriler, Amaçlar ve Hukuki Sebepler",
    paragraphs: [
      "2.1. Ad, Soyad ve E-posta Bilgileri",
      "Ad, soyad ve e-posta bilgileriniz; kullanıcı hesabınızın oluşturulması, kimliğinizin doğrulanması, uygulamaya güvenli giriş yapılması, üyelik ilişkisinin kurulması ve yürütülmesi amacıyla işlenmektedir. Bu veriler KVKK m.5/2-c kapsamında sözleşmenin kurulması ve ifası hukuki sebebine dayanılarak işlenir.",

      "2.2. Takvim Verileri",
      "Takvim verileriniz; günlük/aylık planlarınızın yönetilmesi, etkinliklerin görüntülenmesi, yeni etkinlik eklenmesi, etkinliklerin güncellenmesi veya silinmesi ve hatırlatma oluşturulması amacıyla işlenebilir. Bu veriler ilgili özelliği kullanmayı tercih etmeniz ve izin vermeniz halinde açık rızanıza dayanılarak işlenir.",

      "2.3. Kamera, Fotoğraf ve Görsel Veriler",
      "Kiler, gardırop, kıyafet, makyaj ürünü ve benzeri fotoğraflarınız; yemek tarifi, kombin, gardırop ve makyaj önerileri sunulması amacıyla işlenebilir. Bu veriler ilgili özelliği kullanmayı tercih etmeniz ve izin vermeniz halinde açık rızanıza dayanılarak işlenir.",
      "Fotoğraf ve görselleriniz, profilinize veya gardırobunuza kaydetmeyi tercih etmediğiniz sürece kalıcı olarak saklanmaz. Kaydettiğiniz görseller, ilgili özelliğin sunulabilmesi amacıyla saklanabilir ve dilediğiniz zaman silinebilir.",

      "2.4. Gardırop, Kıyafet ve Makyaj Verileri",
      "Kıyafet ve gardırop fotoğraflarınız kombin önerisi sunulması amacıyla işlenebilir. Kılık ve kıyafet bilgilerinin hassas nitelikte olabileceği dikkate alınarak, bu veriler yalnızca sizin seçtiğiniz görseller üzerinden ve ilgili özellik kapsamında işlenir.",
      "Makyaj önerisi için seçtiğiniz makyaj ürünü veya yüz fotoğrafı analiz edilebilir. Yüz fotoğrafınız kimlik doğrulama, yüz tanıma veya biyometrik eşleştirme amacıyla kullanılmaz.",

      "2.5. Alerji, Diyet ve Sağlıkla Bağlantılı Bilgiler",
      "Alerji, intolerans, hamilelik, hastalık, özel diyet veya sağlıkla bağlantılı bilgileri paylaşmanız halinde bu veriler yalnızca yemek önerilerini kişiselleştirmek amacıyla işlenir. Bu veriler özel nitelikli kişisel veri niteliğinde olabileceğinden, ilgili veriler açık rızanıza dayanılarak işlenir.",

      "2.6. AI Komutları ve Kullanıcı İçerikleri",
      "Uygulama içinde yazdığınız metinsel komutlar, sorular, açıklamalar ve seçtiğiniz görseller; yemek tarifi, kombin, makyaj ve planlama önerileri oluşturulması amacıyla işlenebilir. Bu veriler ilgili özelliğin sunulması amacıyla ve açık rızanız kapsamında işlenir.",

      "2.7. Teknik Veriler, Loglar ve Bildirim Bilgileri",
      "Cihaz türü, uygulama sürümü, hata kayıtları, güvenlik logları, oturum bilgileri, bildirim tercihleri ve benzeri teknik veriler; uygulamanın güvenli şekilde çalışması, hata ve performans takibi, hesap güvenliği, kötüye kullanımın önlenmesi ve bildirimlerin gönderilebilmesi amaçlarıyla işlenebilir.",
      "Bu veriler, KVKK m.5/2-f kapsamında meşru menfaat hukuki sebebine, KVKK m.5/2-ç kapsamında hukuki yükümlülüğün yerine getirilmesi hukuki sebebine veya ilgili işlemin niteliğine göre açık rızanıza dayanılarak işlenebilir.",
    ],
  },
  {
    title: "3. Kişisel Verilerin Toplanma Yöntemi",
    paragraphs: [
      "Kişisel verileriniz; uygulama içindeki kayıt formları, Google veya Apple ile giriş yöntemleri, cihaz izinleri, kullanıcı tarafından yüklenen fotoğraf ve içerikler, takvim entegrasyonları, uygulama içi ayarlar, bildirim tercihleri ve otomatik teknik kayıtlar yoluyla elektronik ortamda toplanır.",
    ],
  },
  {
    title: "4. Kişisel Verilerin Aktarılması",
    paragraphs: [
      "Ad, soyad ve e-posta gibi doğrudan hesap kimlik bilgileriniz, yapay zeka sağlayıcılarına gönderilmez.",
      "Bununla birlikte, yapay zeka önerilerinin oluşturulabilmesi için yazdığınız komutlar ve seçtiğiniz görseller, doğrudan hesap kimlik bilgilerinizden ayrıştırılarak hizmet alınan yapay zeka sağlayıcıları üzerinden işlenebilir.",
      "Kişisel verileriniz; bulut altyapısı, kimlik doğrulama, hata ve performans izleme, bildirim gönderimi, güvenlik, barındırma ve yapay zeka önerileri gibi hizmetlerin sunulması amacıyla sınırlı olarak hizmet sağlayıcılarla paylaşılabilir.",
      "Hizmet sağlayıcıların yurt dışında bulunması veya verilerin yurt dışındaki sunucular üzerinden işlenmesi halinde kişisel verileriniz KVKK’nın yurt dışına aktarım hükümlerine uygun şekilde aktarılabilir.",
      "Kişisel verileriniz, yetkili kamu kurum ve kuruluşlarının usulüne uygun talepleri halinde ilgili mevzuat kapsamında aktarılabilir.",
    ],
  },
  {
    title: "5. Veri Saklama Süreleri",
    paragraphs: [
      "Kişisel verileriniz, işleme amaçları için gerekli olan süre boyunca saklanır. Hesap bilgileriniz hesabınız aktif olduğu sürece; kayıtlı görselleriniz siz silene, hesabınızı kapatana veya saklama amacı sona erene kadar; rıza kayıtlarınız hukuki yükümlülükler ve ispat amacıyla gerekli süre boyunca; teknik loglar ise güvenlik ve sistem bütünlüğü amacıyla sınırlı süreyle saklanabilir.",
      "Takvim verileriniz harici sunucularda kalıcı olarak saklanmaz. Takvim işlemleri, ilgili özelliğin çalışması için gerekli kapsamda yürütülür.",
    ],
  },
  {
    title: "6. Açık Rızanın Geri Alınması",
    paragraphs: [
      "Açık rızaya dayalı veri işleme faaliyetleri bakımından verdiğiniz rızayı dilediğiniz zaman geri alabilirsiniz. Rızanızı geri aldığınızda ilgili özellik kısmen veya tamamen kullanılamayabilir; ancak bu durum uygulamanın diğer özelliklerini kullanmanıza engel olmaz.",
      "Takvim, kamera/fotoğraf, AI önerileri, sağlık/alerji bilgileri, gardırop/kıyafet verileri ve bildirim tercihlerinizi uygulama ayarlarından veya cihaz ayarlarından değiştirebilirsiniz.",
    ],
  },
  {
    title: "7. Hesap Silme",
    paragraphs: [
      "Hesabınızı uygulama içindeki Ayarlar > Hesabımı Sil menüsünden silebilirsiniz. Hesap silme talebinizin tamamlanmasıyla, hesabınıza bağlı kişisel veriler tamamiyle silinir ve yok edilir. Kanunen saklanması gereken sınırlı kayıtlar, yalnızca ilgili yasal süre boyunca ve sınırlı amaçlarla saklanabilir.",
    ],
  },
  {
    title: "8. KVKK m.11 Kapsamındaki Haklarınız",
    paragraphs: [
      "KVKK m.11 uyarınca kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme, şartları oluşmuşsa silinmesini veya yok edilmesini isteme, yapılan işlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme, otomatik sistemler yoluyla aleyhinize bir sonucun ortaya çıkmasına itiraz etme ve zarara uğramanız halinde zararın giderilmesini talep etme haklarına sahipsiniz.",
      "Bu haklarınıza ilişkin taleplerinizi destek@kiena.com.tr adresi üzerinden Kiena’ya iletebilirsiniz.",
    ],
  },
];

export default function KvkkPage() {
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
            eyebrow="KVKK"
            title="Kiena 6698 Sayılı KVKK Kapsamında Aydınlatma Metni"
            intro={[
              "Veri Sorumlusu Kiena tarafından, Glowyn mobil uygulaması kullanıcılarının kişisel verileri 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve ilgili mevzuata uygun olarak aşağıda açıklanan çerçevede işlenmektedir.",
            ]}
            sections={sections}
          />
        </main>
      </div>
    </div>
  );
}
