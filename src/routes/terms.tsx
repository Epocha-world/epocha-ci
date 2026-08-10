import { createFileRoute } from "@tanstack/react-router";
import { LegalDocumentPage, type LegalDocument } from "@/components/LegalDocumentPage";
import { createSeoHead } from "@/lib/seo";

const ko: LegalDocument = {
  label: "Legal",
  title: "서비스 이용약관",
  summary: "EPOCHA 웹사이트와 교육 프로그램을 이용하는 데 적용되는 기본 조건입니다.",
  effectiveDate: "2026년 7월 13일",
  sections: [
    {
      title: "1. 목적과 적용범위",
      paragraphs: [
        "이 약관은 에포차(EPOCHA, 대표자 Ofranc Maeva Aurelie 외 1명 박주원, 사업자등록번호 708-53-00997, 이하 ‘EPOCHA’)가 웹사이트와 온·오프라인 교육, 코칭, 행사 및 관련 서비스(이하 ‘서비스’)를 제공할 때 EPOCHA와 이용자 사이의 권리와 의무를 정합니다. 개별 프로그램 안내, 신청서 또는 계약에서 달리 정한 사항은 해당 개별 조건이 우선하며, 관련 법령에 반하는 조항은 적용되지 않습니다.",
      ],
    },
    {
      title: "2. 서비스와 이용자",
      paragraphs: [
        "이용자는 웹사이트 방문자, 문의자, 프로그램 신청자와 참가자 및 미성년 참가자의 보호자를 포함합니다. 프로그램의 내용, 일정, 장소, 정원, 참가비와 자격은 각 안내 페이지에 표시합니다. EPOCHA는 서비스의 품질과 안전을 위해 합리적인 범위에서 내용을 변경할 수 있으며 중요한 변경은 사전에 알립니다.",
      ],
    },
    {
      title: "3. 신청과 계약 성립",
      paragraphs: [
        "신청서 제출만으로 참가가 확정되지는 않습니다. EPOCHA가 참가 확정 또는 결제 완료를 통지한 때 계약이 성립합니다. 정원, 자격 또는 안전상 이유로 신청을 거절할 수 있으며, 이미 받은 금액이 있으면 관계 법령과 환불정책에 따라 반환합니다.",
      ],
    },
    {
      title: "4. 미성년자",
      paragraphs: [
        "미성년자는 필요한 경우 법정대리인의 동의를 받아 신청해야 합니다. 보호자는 신청 정보의 정확성, 비상 연락 가능성 및 참가자가 프로그램 규칙을 이해하도록 협조할 책임이 있습니다. 만 14세 미만 아동의 개인정보는 법정대리인 동의 확인 절차에 따라 처리합니다.",
      ],
    },
    {
      title: "5. 이용자의 의무와 행동수칙",
      bullets: [
        "정확한 정보를 제공하고 타인의 정보를 무단으로 사용하지 않을 것",
        "다른 참가자와 직원의 안전, 존엄성, 개인정보와 지식재산권을 존중할 것",
        "괴롭힘, 차별, 폭력, 성적 언행, 불법행위 또는 프로그램 방해 행위를 하지 않을 것",
        "프로그램의 안전 안내, 온라인 커뮤니케이션 규칙과 safeguarding 정책을 따를 것",
      ],
      paragraphs: [
        "중대한 위반이나 안전 위험이 있는 경우 EPOCHA는 경고, 활동 제한 또는 참가 종료 조치를 할 수 있습니다. 가능한 경우 당사자와 보호자에게 사유와 이의제기 방법을 알립니다.",
      ],
    },
    {
      title: "6. 일정 변경과 서비스 중단",
      paragraphs: [
        "강사 사정, 최소 인원 미달, 장소 문제, 재난, 감염병, 정부 조치 등 합리적으로 통제하기 어려운 사유가 발생하면 일정·장소·진행 방식을 변경하거나 프로그램을 연기할 수 있습니다. 핵심 내용이 중대하게 변경되거나 EPOCHA가 프로그램을 취소하면 이용자는 환불정책에 따른 환불을 요청할 수 있습니다.",
      ],
    },
    {
      title: "7. 지식재산권과 참가자 결과물",
      paragraphs: [
        "웹사이트, 교육자료, 브랜드와 프로그램 구성에 관한 권리는 EPOCHA 또는 정당한 권리자에게 있습니다. 이용자는 개인적 학습 목적을 넘어 자료를 복제, 판매, 공개 배포하거나 상업적으로 이용할 수 없습니다.",
        "참가자가 만든 원본 결과물의 권리는 원칙적으로 참가자에게 있습니다. 교육 운영에 필요한 범위의 공유와 피드백은 허용되지만, 홍보·상업적 활용은 별도의 명시적 동의를 받습니다. 참가자는 결과물이 타인의 권리를 침해하지 않도록 해야 합니다.",
      ],
    },
    {
      title: "8. 외부 서비스",
      paragraphs: [
        "웹사이트에는 Google Forms, WhatsApp, 소셜미디어 등 외부 서비스 링크가 포함될 수 있습니다. 외부 서비스에는 해당 사업자의 약관과 개인정보처리방침이 적용됩니다. EPOCHA는 법률상 책임이 있는 경우를 제외하고 외부 서비스 자체의 운영을 보증하지 않습니다.",
      ],
    },
    {
      title: "9. 책임과 보증 범위",
      paragraphs: [
        "EPOCHA는 선량한 관리자의 주의로 서비스를 제공합니다. 다만 프로그램 참여가 특정 학교 입학, 취업, 투자, 수익 또는 자격 취득을 보장하지는 않습니다. EPOCHA의 고의 또는 중대한 과실, 생명·신체 손해, 소비자 보호 법령상 배제할 수 없는 책임은 이 약관으로 제한되지 않습니다.",
      ],
    },
    {
      title: "10. 개인정보와 환불",
      paragraphs: [
        "개인정보 처리에는 개인정보처리방침이, 신청 취소와 환불에는 취소·환불 정책이 적용됩니다. 별도의 동의가 필요한 개인정보, 사진·영상 또는 마케팅 활용은 참가 필수 동의와 구분합니다.",
      ],
    },
    {
      title: "11. 약관 변경, 문의 및 준거법",
      paragraphs: [
        "EPOCHA는 법령 또는 서비스 변경을 반영하기 위해 약관을 개정할 수 있으며 시행일과 주요 변경 내용을 사전에 게시합니다. 이용자에게 불리한 중요한 변경은 합리적인 기간 전에 알립니다.",
        "사업자: 에포차(EPOCHA)\n대표자: Ofranc Maeva Aurelie 외 1명(박주원)\n사업자등록번호: 708-53-00997\n문의: hello@epocha.world\n주소: R214, 10 Yeonmujang 11-gil, Seongdong-gu, Seoul, Republic of Korea",
        "이 약관은 대한민국 법률을 따릅니다. 분쟁은 당사자 간 협의 또는 소비자분쟁조정 절차로 해결하며, 해결되지 않으면 대한민국 민사소송법상 관할법원에 제기할 수 있습니다.",
      ],
    },
  ],
};

const en: LegalDocument = {
  label: "Legal",
  title: "Terms of Service",
  summary: "The basic terms for using EPOCHA’s website and educational programmes.",
  effectiveDate: "13 July 2026",
  sections: [
    {
      title: "1. Purpose and scope",
      paragraphs: [
        "These Terms govern the relationship between EPOCHA (representatives: Ofranc Maeva Aurelie and Juwon Bak; business registration number: 708-53-00997; “EPOCHA”) and users of its website, online and in-person education, coaching, events and related services. Specific programme information, forms or contracts prevail where they state different terms. Any provision inconsistent with mandatory law does not apply.",
      ],
    },
    {
      title: "2. Services and users",
      paragraphs: [
        "Users include visitors, enquirers, applicants, participants and guardians of minor participants. Programme content, schedule, location, capacity, fees and eligibility are displayed on the relevant page. We may make reasonable changes for quality and safety and give advance notice of material changes.",
      ],
    },
    {
      title: "3. Applications and contracts",
      paragraphs: [
        "Submitting a form does not by itself confirm a place. A contract is formed when EPOCHA confirms participation or completed payment. We may decline an application because of capacity, eligibility or safety and return any amount received in accordance with law and the Refund Policy.",
      ],
    },
    {
      title: "4. Minors",
      paragraphs: [
        "A minor must obtain legal guardian consent where required. Guardians are responsible for accurate information, remaining reachable in an emergency and helping the participant understand programme rules. Information about children under 14 is processed only after the required guardian verification.",
      ],
    },
    {
      title: "5. User responsibilities and conduct",
      bullets: [
        "Provide accurate information and do not misuse another person’s information",
        "Respect the safety, dignity, privacy and intellectual property of others",
        "Do not engage in harassment, discrimination, violence, sexual misconduct, unlawful conduct or disruption",
        "Follow safety instructions, online communication rules and the Safeguarding Policy",
      ],
      paragraphs: [
        "For serious breaches or safety risks, we may issue a warning, restrict an activity or end participation. Where appropriate, we explain the reason and review route to the participant and guardian.",
      ],
    },
    {
      title: "6. Changes and interruption",
      paragraphs: [
        "We may change the schedule, venue or delivery method, or postpone a programme, because of instructor availability, insufficient enrolment, venue issues, disasters, infectious disease, government action or other circumstances reasonably outside our control. A participant may request a refund under the Refund Policy if a core element materially changes or EPOCHA cancels the programme.",
      ],
    },
    {
      title: "7. Intellectual property and participant work",
      paragraphs: [
        "The website, learning materials, brand and programme design belong to EPOCHA or their lawful owners. Materials may not be reproduced, sold, publicly distributed or commercially used beyond personal learning.",
        "Participants normally retain rights in their original work. Sharing within the programme for delivery and feedback is permitted, but promotional or commercial use requires separate express consent. Participants must not infringe another person’s rights.",
      ],
    },
    {
      title: "8. Third-party services",
      paragraphs: [
        "The site may link to Google Forms, WhatsApp, social media and other services governed by their own terms and privacy policies. Except where legally responsible, EPOCHA does not warrant the operation of an external service.",
      ],
    },
    {
      title: "9. Responsibility and outcomes",
      paragraphs: [
        "We provide services with reasonable care but do not guarantee admission, employment, investment, income or a particular qualification. These Terms do not limit liability that cannot lawfully be excluded, including liability for EPOCHA’s intent or gross negligence and harm to life or body.",
      ],
    },
    {
      title: "10. Privacy and refunds",
      paragraphs: [
        "The Privacy Policy applies to personal information and the Refund Policy applies to cancellations and refunds. Optional consent for sensitive information, media use or marketing is separated from participation requirements.",
      ],
    },
    {
      title: "11. Changes, contact and law",
      paragraphs: [
        "We may amend these Terms to reflect changes in law or the services. The effective date and material changes are published in advance, with reasonable prior notice for significant changes adverse to users.",
        "Business operator: EPOCHA\nRepresentatives: Ofranc Maeva Aurelie and Juwon Bak\nBusiness registration number: 708-53-00997\nContact: hello@epocha.world\nAddress: R214, 10 Yeonmujang 11-gil, Seongdong-gu, Seoul, Republic of Korea",
        "These Terms are governed by the laws of the Republic of Korea. Parties should first seek agreement or consumer dispute resolution; unresolved disputes may be brought before a court with jurisdiction under Korean civil procedure law.",
      ],
    },
  ],
};

export const Route = createFileRoute("/terms")({
  head: () =>
    createSeoHead({
      title: "서비스 이용약관 | Terms of Service — EPOCHA",
      description: "EPOCHA 서비스 이용약관 및 영문 번역본",
      path: "/terms",
    }),
  component: () => <LegalDocumentPage ko={ko} en={en} />,
});
