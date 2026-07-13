import { createFileRoute } from "@tanstack/react-router";
import { LegalDocumentPage, type LegalDocument } from "@/components/LegalDocumentPage";

const ko: LegalDocument = {
  label: "Legal",
  title: "개인정보처리방침",
  summary:
    "EPOCHA Learning Hub는 참가자와 보호자의 개인정보를 필요한 범위에서 안전하고 투명하게 처리합니다.",
  effectiveDate: "2026년 7월 13일",
  notice:
    "프로그램 신청 양식에서는 수집 항목, 보유기간, 국외 이전 등 해당 신청에 필요한 사항을 별도로 안내하고 동의를 받습니다.",
  sections: [
    {
      title: "1. 개인정보의 처리 목적",
      paragraphs: [
        "에포차(EPOCHA, 대표자 Ofranc Maeva Aurelie 외 1명 박주원, 이하 ‘EPOCHA’)는 문의 응대, 프로그램 안내·신청·선발·운영, 참가자와 보호자 연락, 안전관리, 계약 및 결제·환불 처리, 법적 의무 이행을 위해 개인정보를 처리합니다. 처리는 개인정보 보호법 제15조제1항에 따른 정보주체의 동의, 계약 체결·이행, 법령상 의무 또는 합리적인 범위의 정당한 이익을 근거로 하며, 목적을 벗어나 이용할 때에는 법령상 근거를 확인하거나 별도 동의를 받습니다.",
      ],
    },
    {
      title: "2. 처리하는 개인정보 항목",
      bullets: [
        "일반 문의: 이름, 이메일 주소, 문의 내용과 이용자가 자발적으로 제공한 정보",
        "프로그램 신청: 참가자 이름, 생년 또는 연령대, 연락처, 이메일, 학교·소속, 관심 프로그램, 지원 내용",
        "미성년자 참가: 보호자 이름, 관계, 연락처, 이메일 및 법정대리인 동의 확인 정보",
        "계약·결제·환불: 신청 내역, 결제 및 환불에 필요한 거래 정보. 카드번호 등 결제수단의 핵심 정보는 결제대행사가 직접 처리할 수 있습니다.",
        "안전관리: 알레르기, 식이 제한, 건강상 유의사항과 응급 연락처. 필요한 경우 별도의 민감정보 동의를 받습니다.",
        "웹사이트 이용 시 자동 생성될 수 있는 정보: IP 주소, 접속 일시, 브라우저·기기 정보, 쿠키와 유사 식별자",
      ],
    },
    {
      title: "3. 처리 및 보유기간",
      bullets: [
        "일반 문의: 답변 완료 후 1년(동의 또는 요청에 따른 조치 이행). 다만 소비자 불만·분쟁에 해당하면 3년",
        "선발되지 않은 프로그램 신청정보: 선발 절차 종료 후 6개월(이의 제기 및 추가 선발 대응 후 파기)",
        "참가자의 신청·출결·운영 기록: 프로그램 종료 후 3년(계약 이행, 교육 운영 확인 및 분쟁 대응)",
        "응급연락처·알레르기·건강상 유의사항: 프로그램 종료 후 30일 이내 파기. 안전사고가 발생하면 해당 사고가 종결될 때까지",
        "선택 동의에 따른 사진·영상·결과물: 동의일로부터 3년 또는 동의 철회 시까지",
        "계약·대금결제·공급 기록: 전자상거래법에 따라 5년",
        "소비자 불만 또는 분쟁처리 기록: 전자상거래법에 따라 3년",
        "표시·광고 기록: 전자상거래법에 따라 6개월",
        "법정대리인 동의 기록: 프로그램 종료 후 3년(동의 및 계약의 적법성 확인)",
      ],
      paragraphs: [
        "전자상거래법 시행령 제6조가 정한 거래기록을 제외한 개인정보는 개인정보 보호법 제21조에 따라 보유기간이 지나거나 목적이 달성되면 지체 없이 파기합니다. 다른 법령이 더 긴 보존기간을 요구하거나 진행 중인 분쟁 해결에 필요한 경우에는 해당 정보만 분리하여 보관합니다.",
      ],
    },
    {
      title: "4. 만 14세 미만 아동의 개인정보",
      paragraphs: [
        "만 14세 미만 아동의 개인정보 처리에 동의가 필요한 경우 법정대리인의 동의를 받고 그 동의 여부를 확인합니다. 동의 확인을 위해 법정대리인의 이름과 연락처 등 최소한의 정보를 먼저 수집할 수 있습니다. 법정대리인은 아동의 개인정보에 대한 열람, 정정·삭제, 처리정지 및 동의 철회를 요청할 수 있습니다.",
      ],
    },
    {
      title: "5. 제3자 제공 및 처리위탁",
      paragraphs: [
        "EPOCHA는 원칙적으로 동의 없이 개인정보를 제3자의 독립적인 목적에 제공하지 않습니다. 학교, 코치, 멘토 또는 프로그램 파트너에게 제공이 필요한 경우에는 제공받는 자, 목적, 항목, 보유기간과 거부권을 사전에 알리고 별도 동의를 받습니다.",
        "웹 호스팅, 신청서, 이메일, 문서관리, 결제와 같은 업무를 외부 사업자에게 맡길 수 있습니다. 수탁자와 위탁업무는 서비스 구성에 따라 변경될 수 있으며, 중요한 변경이 있을 때 이 방침 또는 신청 화면을 통해 공개합니다.",
      ],
    },
    {
      title: "6. 개인정보의 국외 이전",
      paragraphs: [
        "Google Forms·Drive·Workspace, 해외 호스팅 또는 커뮤니케이션 서비스를 사용하는 경우 개인정보가 네트워크를 통해 국외 서버로 이전되거나 국외에서 접근될 수 있습니다. EPOCHA는 적용되는 법적 근거를 확인하고, 이전받는 자, 국가, 일시와 방법, 목적, 항목, 보유기간 및 이전 거부 방법을 해당 신청 화면에서 안내합니다. 필수적인 국외 이전을 거부하면 해당 외부 서비스를 이용한 신청이나 연락이 제한될 수 있습니다.",
      ],
    },
    {
      title: "7. 개인정보의 파기",
      paragraphs: [
        "보유기간이 끝나거나 처리 목적이 달성되면 지체 없이 개인정보를 파기합니다. 전자 파일은 복구하기 어려운 방식으로 삭제하고, 종이 문서는 분쇄하거나 소각합니다. 법령에 따라 계속 보존해야 하는 정보는 다른 정보와 분리하여 보관합니다.",
      ],
    },
    {
      title: "8. 정보주체의 권리",
      paragraphs: [
        "정보주체와 법정대리인은 개인정보의 열람, 정정·삭제, 처리정지, 동의 철회와 법령상 이의제기를 요청할 수 있습니다. 본인 또는 정당한 대리인 여부를 확인한 후 관련 법령이 정한 기간과 절차에 따라 처리합니다.",
      ],
    },
    {
      title: "9. 안전성 확보조치 및 쿠키",
      paragraphs: [
        "EPOCHA는 접근권한 최소화, 비밀번호와 전송구간 보호, 접속기록 관리, 직원 교육 및 위탁사 점검 등 개인정보 보호를 위한 관리적·기술적 조치를 취합니다.",
        "웹사이트는 필수 기능과 이용환경 개선을 위해 쿠키를 사용할 수 있습니다. 이용자는 브라우저 설정에서 쿠키를 차단하거나 삭제할 수 있으나 일부 기능이 제한될 수 있습니다. 선택적 분석·광고 쿠키를 도입하는 경우 별도 선택 수단을 제공합니다.",
      ],
    },
    {
      title: "10. 개인정보 문의 및 방침 변경",
      paragraphs: [
        "개인정보처리자: 에포차(EPOCHA)\n대표자: Ofranc Maeva Aurelie 외 1명(박주원)\n사업자등록번호: 708-53-00997\n개인정보 보호책임자: Ofranc Maeva Aurelie, 박주원(창업자)\n이메일: hello@epocha.world\n주소: R214, 10 Yeonmujang 11-gil, Seongdong-gu, Seoul, Republic of Korea",
        "권리침해 상담은 개인정보침해신고센터(국번 없이 118), 개인정보분쟁조정위원회(1833-6972), 경찰청(국번 없이 182) 등에 문의할 수 있습니다. 이 방침을 변경하는 경우 시행 전에 웹사이트에 변경 내용과 시행일을 알립니다.",
      ],
    },
  ],
};

const en: LegalDocument = {
  label: "Legal",
  title: "Privacy Policy",
  summary:
    "EPOCHA Learning Hub processes participant and guardian information safely, transparently, and only as needed.",
  effectiveDate: "13 July 2026",
  notice:
    "Each programme form provides a separate notice and obtains any consent required for the information collected, retention period, and overseas transfer.",
  sections: [
    {
      title: "1. Purposes of processing",
      paragraphs: [
        "EPOCHA (business operator: EPOCHA; representatives: Ofranc Maeva Aurelie and Park Juwon; “EPOCHA”) processes personal information to respond to enquiries; provide information; accept, assess and administer programme registrations; communicate with participants and guardians; manage safety; process contracts, payments and refunds; and comply with legal obligations. Processing is based on consent, steps requested before or needed to perform a contract, legal obligations, or EPOCHA’s legitimate interests within the reasonable limits of Article 15(1) of Korea’s Personal Information Protection Act. We obtain separate consent or confirm another lawful basis before using information for an unrelated purpose.",
      ],
    },
    {
      title: "2. Information we process",
      bullets: [
        "General enquiries: name, email address, message and information voluntarily provided",
        "Programme applications: participant name, year of birth or age range, contact details, email, school or organisation, programme interests and application responses",
        "Minor participants: guardian name, relationship, contact details, email and evidence of legal guardian consent",
        "Contracts, payments and refunds: registration and transaction information. Payment providers may process card details directly.",
        "Safety: emergency contact, allergies, dietary needs and relevant health considerations, subject to separate consent where sensitive information is required",
        "Automatically generated data: IP address, access time, browser and device details, cookies and similar identifiers",
      ],
    },
    {
      title: "3. Retention",
      bullets: [
        "General enquiries: one year after the response is completed; three years where the matter is a consumer complaint or dispute",
        "Unsuccessful programme applications: six months after selection ends",
        "Participant application, attendance and administration records: three years after the programme",
        "Emergency contacts, allergies and health considerations: deleted within 30 days after the programme, or when a related safety incident is resolved",
        "Images, video and participant work used with optional consent: three years from consent or until consent is withdrawn",
        "Contract, payment and supply records: five years under Korean e-commerce law",
        "Consumer complaints and dispute records: three years under Korean e-commerce law",
        "Advertising records: six months under Korean e-commerce law",
        "Guardian consent records: three years after the programme",
      ],
      paragraphs: [
        "Except for transaction records retained under Article 6 of the Enforcement Decree of the Korean E-Commerce Act, personal information is deleted without delay when its purpose or retention period ends under Article 21 of the Personal Information Protection Act. Only records required by another law or an active dispute are stored separately for the applicable period.",
      ],
    },
    {
      title: "4. Children under 14",
      paragraphs: [
        "Where consent is required to process information about a child under 14, we obtain and verify consent from the child’s legal guardian. We may first collect the minimum guardian details needed for verification. A guardian may exercise access, correction, deletion, suspension and withdrawal rights on the child’s behalf.",
      ],
    },
    {
      title: "5. Third parties and processors",
      paragraphs: [
        "We do not provide personal information to an independent third party without consent unless permitted by law. If information must be shared with a school, coach, mentor or programme partner, we give a separate notice describing the recipient, purpose, items, retention period and right to refuse.",
        "We may use service providers for hosting, forms, email, document management and payments. Material changes to processors or outsourced tasks will be disclosed in this policy or at the relevant collection point.",
      ],
    },
    {
      title: "6. Overseas transfers",
      paragraphs: [
        "When Google Forms, Drive or Workspace, overseas hosting, or communications services are used, information may be transferred to or accessed from servers outside Korea. At the relevant collection point, we disclose the recipient, country, timing and method, purpose, items, retention period and how to refuse, and confirm the lawful basis. Refusal may prevent use of an application or communication channel that depends on that provider.",
      ],
    },
    {
      title: "7. Deletion",
      paragraphs: [
        "We delete information without undue delay when its purpose or retention period ends. Electronic records are deleted using methods designed to prevent recovery, and paper records are shredded or incinerated. Records retained by law are stored separately.",
      ],
    },
    {
      title: "8. Your rights",
      paragraphs: [
        "Data subjects and legal guardians may request access, correction, deletion, suspension, withdrawal of consent and an objection where provided by law. We verify the requester or authorised representative and respond under applicable procedures and deadlines.",
      ],
    },
    {
      title: "9. Security and cookies",
      paragraphs: [
        "We use proportionate safeguards including limited access, protection of passwords and data in transit, access logging, staff training and processor oversight.",
        "The site may use cookies for essential functions and service improvement. Browser settings can block or delete cookies, though some functions may be limited. We will provide a separate choice before introducing optional analytics or advertising cookies.",
      ],
    },
    {
      title: "10. Contact and changes",
      paragraphs: [
        "Controller: EPOCHA\nRepresentatives: Ofranc Maeva Aurelie and Park Juwon\nBusiness registration number: 708-53-00997\nPrivacy officers: Ofranc Maeva Aurelie and Park Juwon (Founders)\nEmail: hello@epocha.world\nAddress: R214, 10 Yeonmujang 11-gil, Seongdong-gu, Seoul, Republic of Korea",
        "In Korea, privacy concerns may also be directed to the Privacy Infringement Report Center (118), Personal Information Dispute Mediation Committee (1833-6972), or Korean National Police Agency (182). We publish material changes and their effective date before they take effect.",
      ],
    },
  ],
};

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "개인정보처리방침 | Privacy Policy — EPOCHA" },
      { name: "description", content: "EPOCHA Learning Hub 개인정보처리방침 및 영문 번역본" },
    ],
  }),
  component: () => <LegalDocumentPage ko={ko} en={en} />,
});
