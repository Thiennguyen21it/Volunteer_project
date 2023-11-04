var translations = {
     en: {
        home: "Home",
        activities: "Activities",
        achievement: "Achievement",
        contributors: "Contributors",
        QA: "QA & Contact",
        project_title: "DEVELOPING NEW PA-CANG VILLAGE, CA DY COMMUNE, NAM GIANG DISTRICT",
        project_content:"Charity project for the sustainable development of Co tu minority people in Pà-Ong Village aims to provide clean water, healthcare, education, and livelihood opportunities to improve the quality of life for the community. The project is focused on creating a sustainable future and making a difference in the lives of those who are less fortunate. The Co tu minority people in Pà-Ong Village face numerous challenges such as lack of access to clean water, inadequate healthcare facilities, poor education, and limited access to other basic amenities. The Charity project aims to alleviate these challenges and improve the quality of life for these people.",
        sponser_button: "Be a contributor or sponsor",
        program_title:"Teaching English for kids in the village",
        program_content:"his is a program under our charitable project that aims to provide English language education to children in rural areas. The program is designed to equip children with the necessary skills to communicate effectively in English. Our team of experienced teachers will teach the basics of English language to the children.",
        achivement_slogan:"Whatever it is that you care about, there will be a charity working on it. Charities help in lots of different ways",
        achievement_sub:"The practice of charity means the voluntary giving of help to those in need, as a humanitairan act. There are a number of philosophies.",
        achivement_title:"Fundraising For Children And Refugees From Donbass",
        achivement_button:"View more"
     },
    jp: {
        home: "ホーム",
        activities: "アクティビティ",
        achievement: "達成",
        contributors: "貢献者",
        QA: "QA & お問い合わせ", 
        project_title: "ナムギャン県カジー郡パカン村の開発",
        project_content:"パオン村のコツ族少数民族の持続可能な開発のための慈善事業は、コミュニティの生活の質を向上させるために、清潔な水、医療、教育、生計の機会を提供することを目的としています。 このプロジェクトは、持続可能な未来を創造し、恵まれない人々の生活に変化をもたらすことに焦点を当てています。 パオン村のコツ族少数民族は、清潔な水へのアクセスの欠如、不適切な医療施設、貧しい教育、他の基本的な生活必需品へのアクセスの制限など、さまざまな課題に直面しています。 慈善事業は、これらの課題を緩和し、これらの人々の生活の質を向上させることを目的としています。",
        sponser_button: "貢献者またはスポンサーになる",
        program_title:"村の子供たちに英語を教える",
        program_content:"これは、地方の子供たちに英語教育を提供するための慈善事業の一環であるプログラムです。 このプログラムは、子供たちが英語で効果的にコミュニケーションを取るために必要なスキルを身につけることを目的としています。 経験豊富な教師チームが、子供たちに英語の基礎を教えます。",
        achivement_slogan:"あなたが気にかけていることは何でも、それに取り組んでいる慈善団体があります。 慈善団体はさまざまな方法で助けてくれます",
        achievement_sub:"慈善の実践とは、人道的な行為として、必要な人々に自発的に助けを与えることを意味します。 いくつかの哲学があります。",
        achivement_title:"子供とドンバスからの難民のための資金調達",
        achivement_button:"もっと見る"
     },
    vn: {
        home: "Trang chủ",
        activities: "Hoạt động",
        achievement: "Thành tựu",
        contributors: "Nhà hảo tâm",
        QA: "QA & Liên hệ",
        project_title: "Phát triển làng Pa-Cang mới, xã Cà Dy, huyện Nam Giang",
        project_content:"Dự án từ thiện vì sự phát triển bền vững của người dân tộc Cơ Tu tại làng Pà-Ong nhằm cung cấp nguồn nước sạch, chăm sóc sức khỏe, giáo dục và cơ hội sinh kế để cải thiện chất lượng cuộc sống cho cộng đồng. Dự án tập trung vào việc tạo ra một tương lai bền vững và tạo ra sự khác biệt trong cuộc sống của những người kém may mắn. Người dân tộc Cơ Tu tại làng Pà-Ong đối mặt với nhiều thách thức như thiếu nguồn nước sạch, cơ sở y tế không đầy đủ, giáo dục kém và hạn chế tiếp cận các tiện ích cơ bản khác. Dự án từ thiện nhằm giảm bớt những thách thức này và cải thiện chất lượng cuộc sống cho những người này.",
        sponser_button: "Trở thành nhà hảo tâm hoặc nhà tài trợ",
        program_title:"Dạy tiếng Anh cho trẻ em trong làng",
        program_content:"Đây là một chương trình trong dự án từ thiện của chúng tôi nhằm cung cấp giáo dục tiếng Anh cho trẻ em ở vùng nông thôn. Chương trình được thiết kế để trang bị cho trẻ em những kỹ năng cần thiết để giao tiếp hiệu quả bằng tiếng Anh. Đội ngũ giáo viên giàu kinh nghiệm của chúng tôi sẽ dạy cho trẻ em những kiến thức cơ bản về tiếng Anh.",
        achivement_slogan:"Bất kể điều gì bạn quan tâm, sẽ có một tổ chức từ thiện làm việc về nó. Các tổ chức từ thiện giúp đỡ theo nhiều cách khác nhau",
        achievement_sub:"Thực hành từ thiện có nghĩa là việc tự nguyện cung cấp sự giúp đỡ cho những người có nhu cầu, như một hành động nhân đạo. Có một số triết lý.",
        achivement_title:"Quyên góp cho trẻ em và người tị nạn từ Donbass",
        achivement_button:"Xem thêm"
     }
    };  

    function changeLanguage(lang) {
        var elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(function(element) {
            var text = element.dataset.i18n;
            element.innerHTML = translations[lang][text];
        });
       
    }