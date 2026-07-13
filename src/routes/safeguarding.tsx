import { createFileRoute } from "@tanstack/react-router";
import { LegalDocumentPage, type LegalDocument } from "@/components/LegalDocumentPage";

const ko: LegalDocument = {
  label: "Safety",
  title: "아동·청소년 보호정책",
  summary:
    "모든 아동과 청소년이 존중받고 안전하게 배우도록 하기 위한 EPOCHA의 원칙과 대응 절차입니다.",
  effectiveDate: "2026년 7월 13일",
  notice:
    "즉각적인 위험, 학대 또는 성범죄가 의심되면 EPOCHA의 확인을 기다리지 말고 경찰 112에 신고해 주세요.",
  sections: [
    {
      title: "1. 목적과 적용범위",
      paragraphs: [
        "EPOCHA는 아동복지법, 아동학대범죄의 처벌 등에 관한 특례법 및 아동·청소년의 성보호에 관한 법률의 취지를 존중합니다. 이 정책은 EPOCHA 프로그램에 참여하는 만 19세 미만의 아동·청소년과 직원, 강사, 코치, 멘토, 자원봉사자, 계약자 및 파트너에게 적용됩니다.",
      ],
    },
    {
      title: "2. 기본 원칙",
      bullets: [
        "아동·청소년의 안전과 최선의 이익을 우선합니다.",
        "성별, 국적, 인종, 장애, 종교, 성적 지향, 성별 정체성, 가족 또는 경제적 배경 등을 이유로 차별하지 않습니다.",
        "아동·청소년의 의견을 나이와 성숙도에 맞게 듣고 존중합니다.",
        "보호 우려는 선의로 신속하게 공유하며, 신고자와 피해자를 불이익으로부터 보호합니다.",
      ],
    },
    {
      title: "3. 금지되는 행위",
      bullets: [
        "신체적·정서적·성적 학대, 방임, 괴롭힘, 차별, 착취 또는 보복",
        "성적인 농담·메시지·접촉, 사적인 만남 요구 또는 부적절한 선물과 비밀 유지 요구",
        "굴욕적인 체벌, 위협, 강압, 고립 또는 참가자의 취약성을 이용하는 행위",
        "보호자와 EPOCHA가 알지 못하는 개인 계정 연락, 사적인 숙박·이동 또는 닫힌 공간에서의 불필요한 일대일 활동",
        "동의 없이 사진·영상·개인정보를 촬영, 저장 또는 공유하는 행위",
      ],
    },
    {
      title: "4. 직원·코치·멘토의 행동기준",
      paragraphs: [
        "성인은 전문적인 경계를 유지하고, 가능한 한 관찰 가능한 공간과 승인된 채널을 사용하며, 신체 접촉은 안전·응급 또는 교육상 필요한 최소 범위로 제한합니다. 우려되는 행동이나 관계의 경계가 불명확한 상황은 즉시 safeguarding 담당자에게 공유합니다.",
      ],
    },
    {
      title: "5. 일대일 활동과 온라인 소통",
      bullets: [
        "일대일 활동은 목적, 시간과 장소를 사전에 알리고 가능한 한 개방되거나 관찰 가능한 환경에서 진행합니다.",
        "미성년자와의 연락은 프로그램 목적에 한해 EPOCHA가 승인한 계정과 채널을 사용합니다.",
        "필요한 경우 보호자 또는 담당 직원을 대화에 포함하고, 메시지는 업무상 필요한 기간만 보관합니다.",
        "심야 연락, 사라지는 메시지, 개인적 관계를 유도하는 대화와 비밀 유지 요구를 금지합니다.",
      ],
    },
    {
      title: "6. 사진·영상과 개인정보",
      paragraphs: [
        "촬영과 공개는 목적, 매체, 이용기간을 알리고 필요한 참가자·보호자 동의를 받은 범위에서만 합니다. 동의하지 않아도 프로그램 참가에 부당한 불이익을 주지 않습니다. 이름, 학교, 위치 등 신원을 드러내는 정보는 최소화하고, 민감하거나 굴욕적인 장면은 촬영·게시하지 않습니다.",
      ],
    },
    {
      title: "7. 우려 제기와 신고",
      paragraphs: [
        "참가자, 보호자 또는 관계자는 hello@epocha.world로 보호 우려를 알릴 수 있습니다. 신고에는 이름을 밝히지 않아도 되며, 가능한 범위에서 발생 일시, 장소, 관련자와 관찰한 사실을 포함해 주세요.",
        "긴급한 위험이나 범죄가 의심되면 112에 즉시 신고합니다. 신고의무 대상 기관 또는 종사자에 해당하는 경우에는 법령에 따라 아동학대나 아동·청소년 대상 성범죄를 즉시 수사기관에 신고합니다. 내부 확인은 법정 신고를 지연하거나 대신하지 않습니다.",
      ],
    },
    {
      title: "8. 대응 절차",
      bullets: [
        "즉각적인 안전과 의료 필요를 먼저 확인합니다.",
        "아동의 말을 유도하거나 반복 조사하지 않고 들은 내용과 조치를 객관적으로 기록합니다.",
        "알 필요가 있는 담당자와 관계기관에만 정보를 공유합니다.",
        "피신고자와 피해 가능성이 있는 아동의 접촉을 합리적으로 제한할 수 있습니다.",
        "신고자와 참가자에게 가능한 범위에서 다음 절차와 지원 방법을 안내합니다.",
      ],
    },
    {
      title: "9. 채용, 교육과 파트너",
      paragraphs: [
        "EPOCHA는 역할과 법령이 요구하거나 허용하는 범위에서 신원·경력 및 성범죄 경력 등 적격성 확인을 실시하고, 아동·청소년과 접촉하는 인력에게 행동수칙과 신고 절차를 교육합니다. 파트너와 외부 강사에게도 동등한 보호 기준을 요구하고 위반 시 활동을 중단할 수 있습니다.",
      ],
    },
    {
      title: "10. 비밀보장과 불이익 금지",
      paragraphs: [
        "보호 관련 정보는 안전 확보, 법적 신고와 공정한 대응에 필요한 최소 범위로만 공유합니다. 완전한 비밀을 약속할 수는 없지만, 선의로 우려를 제기하거나 조사에 협조한 사람에게 보복하거나 불이익을 주지 않습니다.",
      ],
    },
    {
      title: "11. 담당자와 정책 검토",
      paragraphs: [
        "정책 책임자: Ofranc Maeva Aurelie, 박주원(에포차 창업자)\n사업자: 에포차(EPOCHA)\n사업자등록번호: 708-53-00997\n이메일: hello@epocha.world\n긴급 신고: 경찰 112\n주소: R214, 10 Yeonmujang 11-gil, Seongdong-gu, Seoul, Republic of Korea",
        "이 정책은 최소 연 1회, 관련 법령·서비스 또는 사고 대응 절차가 변경될 때 검토합니다. 정책 위반 또는 대응 결과에 대한 이의는 위 이메일로 제기할 수 있습니다.",
      ],
    },
  ],
};

const en: LegalDocument = {
  label: "Safety",
  title: "Child & Youth Safeguarding Policy",
  summary:
    "EPOCHA’s principles and response process for a respectful and safe learning environment.",
  effectiveDate: "13 July 2026",
  notice:
    "If a child faces immediate danger or you suspect abuse or a sexual offence, call the Korean police on 112 without waiting for EPOCHA to investigate.",
  sections: [
    {
      title: "1. Purpose and scope",
      paragraphs: [
        "EPOCHA respects the purposes of Korea’s Child Welfare Act, Act on Special Cases Concerning the Punishment of Child Abuse Crimes, and Act on the Protection of Children and Youth Against Sexual Abuse. This Policy applies to participants under 19 and to EPOCHA staff, instructors, coaches, mentors, volunteers, contractors and partners.",
      ],
    },
    {
      title: "2. Our principles",
      bullets: [
        "Put the child or young person’s safety and best interests first",
        "Do not discriminate based on sex, nationality, race, disability, religion, sexual orientation, gender identity, family or economic background",
        "Listen to and respect young people in a way appropriate to age and maturity",
        "Raise concerns promptly and in good faith, protecting reporters and affected participants from retaliation",
      ],
    },
    {
      title: "3. Prohibited conduct",
      bullets: [
        "Physical, emotional or sexual abuse, neglect, bullying, discrimination, exploitation or retaliation",
        "Sexual jokes, messages or contact, requests for private meetings, inappropriate gifts or demands for secrecy",
        "Humiliating punishment, threats, coercion, isolation or use of a participant’s vulnerability",
        "Contact through undisclosed personal accounts, private accommodation or transport, or unnecessary one-to-one activity in closed spaces",
        "Recording, storing or sharing images, video or personal information without permission",
      ],
    },
    {
      title: "4. Standards for adults",
      paragraphs: [
        "Adults must maintain professional boundaries, use observable spaces and approved channels where possible, and limit physical contact to the minimum needed for safety, emergency assistance or a legitimate learning activity. Concerning conduct or uncertain boundaries must be reported promptly to the safeguarding contact.",
      ],
    },
    {
      title: "5. One-to-one and online contact",
      bullets: [
        "Give advance notice of the purpose, time and place and use an open or observable setting where possible",
        "Use EPOCHA-approved accounts and channels only for programme purposes",
        "Include a guardian or designated staff member where appropriate and retain messages only as needed",
        "Do not use late-night contact, disappearing messages, relationship-seeking conversation or demands for secrecy",
      ],
    },
    {
      title: "6. Images and personal information",
      paragraphs: [
        "Images are recorded and published only within the stated purpose, media and period and with any required participant and guardian consent. Refusal must not create unfair disadvantage. We minimise identifying details such as school and location and do not record or publish sensitive or humiliating situations.",
      ],
    },
    {
      title: "7. Raising and reporting a concern",
      paragraphs: [
        "Participants, guardians and others may report a concern to hello@epocha.world, including anonymously. Where possible, state the time, place, people involved and facts observed.",
        "Call 112 immediately for urgent danger or suspected crime. Where EPOCHA or an individual is a statutory reporter, suspected child abuse or a sexual offence against a child or young person is reported promptly as required by law. Internal review never replaces or delays a statutory report.",
      ],
    },
    {
      title: "8. How we respond",
      bullets: [
        "Address immediate safety and medical needs first",
        "Listen without leading or repeatedly interviewing the child and record facts and actions objectively",
        "Share information only with those who need it and relevant authorities",
        "Reasonably restrict contact between the reported person and a potentially affected child",
        "Explain next steps and available support where possible",
      ],
    },
    {
      title: "9. Recruitment, training and partners",
      paragraphs: [
        "To the extent required or permitted for a role, EPOCHA conducts identity, experience, eligibility and criminal-history checks and trains personnel who interact with young people on conduct and reporting. Partners and visiting instructors must meet equivalent standards, and their activity may be suspended for a breach.",
      ],
    },
    {
      title: "10. Confidentiality and no retaliation",
      paragraphs: [
        "Safeguarding information is shared only as needed for safety, legal reporting and a fair response. We cannot promise absolute confidentiality, but no person will be retaliated against for raising a genuine concern or cooperating with a review.",
      ],
    },
    {
      title: "11. Contact and review",
      paragraphs: [
        "Policy leads: Ofranc Maeva Aurelie and Juwon Bak (EPOCHA Founders)\nBusiness operator: EPOCHA\nBusiness registration number: 708-53-00997\nEmail: hello@epocha.world\nEmergency: Korean police 112\nAddress: R214, 10 Yeonmujang 11-gil, Seongdong-gu, Seoul, Republic of Korea",
        "We review this Policy at least annually and when law, services or incident procedures change. Concerns about a response or policy breach may be raised through the email above.",
      ],
    },
  ],
};

export const Route = createFileRoute("/safeguarding")({
  head: () => ({
    meta: [
      { title: "아동·청소년 보호정책 | Safeguarding — EPOCHA" },
      { name: "description", content: "EPOCHA 아동·청소년 보호정책 및 영문 번역본" },
    ],
  }),
  component: () => <LegalDocumentPage ko={ko} en={en} />,
});
