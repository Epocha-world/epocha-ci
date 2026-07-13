import { createFileRoute } from "@tanstack/react-router";
import { LegalDocumentPage, type LegalDocument } from "@/components/LegalDocumentPage";

const ko: LegalDocument = {
  label: "Legal",
  title: "취소 및 환불 정책",
  summary: "교육지원 서비스와 교육 관련 자문·평가 서비스의 신청 취소 및 환불 기준입니다.",
  effectiveDate: "2026년 7월 13일",
  notice:
    "이 정책은 대한민국 전자상거래법과 소비자분쟁해결기준을 바탕으로 합니다. 개별 계약이 소비자에게 더 유리한 조건을 정한 경우 그 조건이 우선합니다.",
  sections: [
    {
      title: "1. 적용범위",
      paragraphs: [
        "이 정책은 에포차(EPOCHA, 대표자 Ofranc Maeva Aurelie 외 1명 박주원, 사업자등록번호 708-53-00997)가 교육서비스업으로 제공하는 교육지원 서비스, 교육 관련 자문·평가, Practicum, 캠프, 코칭과 행사에 적용됩니다. 학교·기관과 별도 계약을 체결한 경우에는 해당 계약을 우선 적용하되, 소비자에게 법률상 보장되는 권리를 제한하지 않습니다.",
      ],
    },
    {
      title: "2. 온라인 신청의 청약철회",
      paragraphs: [
        "소비자는 원칙적으로 계약내용에 관한 서면을 받은 날 또는 서비스 제공이 시작된 날 중 늦은 날부터 7일 이내에 청약을 철회할 수 있습니다. 이미 서비스가 전부 제공되었거나 이용자의 사전 동의를 받아 제공이 시작된 디지털콘텐츠 등 법령상 제한 사유가 있는 경우에는 철회가 제한될 수 있으며, EPOCHA는 제한 사유를 신청 전에 명확히 알립니다. 표시·광고 또는 계약내용과 다르게 제공된 경우에는 법령이 정한 더 긴 기간 내에 철회할 수 있습니다.",
      ],
    },
    {
      title: "3. 프로그램 시작 전",
      bullets: [
        "프로그램 시작 전 이용자가 취소하는 경우: 지급한 참가비 전액 환불",
        "EPOCHA가 프로그램을 취소하는 경우: 지급한 금액 전액 환불",
        "일정·장소·진행 방식 등 핵심 조건이 중대하게 변경되어 참가가 곤란한 경우: 변경 통지 후 정한 기간 내 취소 시 전액 환불",
      ],
    },
    {
      title: "4. 프로그램 시작 후",
      paragraphs: [
        "소비자의 사정으로 시작 후 해지하는 경우, 별도 법령이나 더 유리한 개별 조건이 없다면 다음 기준을 적용합니다.",
      ],
      bullets: [
        "총 교습기간이 1개월 이내이고 총 교습시간의 1/3이 지나기 전: 참가비의 2/3 환불",
        "총 교습시간의 1/2이 지나기 전: 참가비의 1/2 환불",
        "총 교습시간의 1/2이 지난 후: 환불하지 않음",
        "총 교습기간이 1개월을 초과하는 경우: 해지한 달의 환불액을 위 기준으로 계산하고, 남은 달의 참가비는 전액 환불",
      ],
    },
    {
      title: "5. EPOCHA의 사정으로 제공할 수 없는 경우",
      paragraphs: [
        "폐강, 운영 중단 또는 EPOCHA의 책임 있는 사유로 서비스를 계속 제공할 수 없으면 제공하지 못한 부분에 해당하는 금액을 환불합니다. 허위·과장 안내, 자격 미달 강사 등 관계 법령 또는 소비자분쟁해결기준상 추가 배상 사유가 있으면 해당 기준을 따릅니다.",
      ],
    },
    {
      title: "6. 할인, 장학금 및 결합상품",
      paragraphs: [
        "환불액은 이용자가 실제 지급한 금액을 기준으로 계산합니다. 여러 프로그램을 함께 구매한 경우 각 프로그램에 합리적으로 배분된 실제 결제액을 기준으로 합니다. 무료 혜택이나 장학금은 현금으로 환급하지 않으며, 법령상 허용되지 않는 위약금이나 임의의 행정비를 공제하지 않습니다.",
      ],
    },
    {
      title: "7. 환불 신청과 처리",
      paragraphs: [
        "이름, 신청 프로그램, 결제일, 취소 사유와 환불받을 방법을 hello@epocha.world로 보내 주세요. EPOCHA는 본인 또는 보호자 여부와 결제 내역을 확인할 수 있습니다. 환불이 확정되면 원칙적으로 3영업일 이내에 원래 결제수단으로 환급을 요청하며, 카드사나 결제기관의 처리 기간은 추가로 소요될 수 있습니다.",
      ],
    },
    {
      title: "8. 결석과 참가 제한",
      paragraphs: [
        "개인 사정에 따른 결석은 프로그램 시작 후 해지로 자동 처리되지 않으며, 제공된 회차로 봅니다. 다만 질병, 재난 등 불가피한 사정은 증빙과 프로그램 특성을 고려해 일정 변경, 대체 참여 또는 환불을 협의할 수 있습니다. 안전 또는 중대한 행동수칙 위반으로 참가가 종료된 경우에도 이미 제공된 부분과 소비자 보호 법령을 기준으로 환불액을 산정합니다.",
      ],
    },
    {
      title: "9. 문의와 분쟁 해결",
      paragraphs: [
        "사업자: 에포차(EPOCHA)\n대표자: Ofranc Maeva Aurelie 외 1명(박주원)\n사업자등록번호: 708-53-00997\n환불 문의: hello@epocha.world\n주소: R214, 10 Yeonmujang 11-gil, Seongdong-gu, Seoul, Republic of Korea",
        "해결되지 않은 분쟁은 한국소비자원 피해구제 또는 소비자분쟁조정위원회의 조정을 이용할 수 있습니다.",
      ],
    },
  ],
};

const en: LegalDocument = {
  label: "Legal",
  title: "Cancellation & Refund Policy",
  summary:
    "Cancellation and refund rules for educational support and education-related advisory and assessment services.",
  effectiveDate: "13 July 2026",
  notice:
    "This policy reflects Korean e-commerce law and the Consumer Dispute Resolution Standards. More favourable terms in a specific contract prevail.",
  sections: [
    {
      title: "1. Scope",
      paragraphs: [
        "This Policy applies to the educational support, education-related advisory and assessment, practicums, camps, coaching and events provided by EPOCHA (representatives: Ofranc Maeva Aurelie and Park Juwon; business registration number: 708-53-00997). A separate school or institutional contract prevails where applicable but does not restrict mandatory consumer rights.",
      ],
    },
    {
      title: "2. Cooling-off for online purchases",
      paragraphs: [
        "A consumer may generally withdraw within seven days from the later of receiving the written contract information or the start of supply. Withdrawal may be restricted where a service has been fully supplied or qualifying digital content began with prior consent, and any restriction will be clearly disclosed before purchase. Longer statutory periods apply when a service differs from the contract or advertising.",
      ],
    },
    {
      title: "3. Before the programme starts",
      bullets: [
        "Cancellation by the participant before the start: full refund of fees paid",
        "Cancellation by EPOCHA: full refund",
        "A material change to core terms such as schedule, location or delivery that prevents participation: full refund when cancelled within the notified period",
      ],
    },
    {
      title: "4. After the programme starts",
      paragraphs: [
        "Unless a more favourable term or specific law applies, participant cancellations after commencement are calculated as follows.",
      ],
      bullets: [
        "Programme of one month or less, before one-third of total instructional time: refund two-thirds",
        "Before one-half of total instructional time: refund one-half",
        "After one-half of total instructional time: no refund",
        "Programme longer than one month: calculate the current month under the rules above and refund all fees allocated to future months",
      ],
    },
    {
      title: "5. Failure to provide by EPOCHA",
      paragraphs: [
        "If closure, interruption or a cause attributable to EPOCHA prevents continued delivery, we refund the undelivered portion. Any additional remedy required for misleading information, an unqualified instructor or another statutory ground follows applicable law and the Consumer Dispute Resolution Standards.",
      ],
    },
    {
      title: "6. Discounts, scholarships and bundles",
      paragraphs: [
        "Refunds are based on the amount actually paid. For bundled programmes, the paid amount is reasonably allocated between them. Free benefits and scholarships are not paid out in cash, and we do not deduct penalties or arbitrary administration charges prohibited by law.",
      ],
    },
    {
      title: "7. How refunds are processed",
      paragraphs: [
        "Email hello@epocha.world with the participant name, programme, payment date, reason and refund method. We may verify identity, guardian authority and payment. Once approved, we ordinarily request a refund to the original payment method within three business days; payment providers may require additional processing time.",
      ],
    },
    {
      title: "8. Absence and removal",
      paragraphs: [
        "A personal absence is treated as a delivered session and does not automatically cancel the programme. For illness, disaster or another unavoidable event, we may agree a transfer, substitute attendance or refund considering evidence and programme format. If participation ends for a serious safety or conduct breach, the refund still reflects services delivered and mandatory consumer law.",
      ],
    },
    {
      title: "9. Contact and disputes",
      paragraphs: [
        "Business operator: EPOCHA\nRepresentatives: Ofranc Maeva Aurelie and Park Juwon\nBusiness registration number: 708-53-00997\nRefund contact: hello@epocha.world\nAddress: R214, 10 Yeonmujang 11-gil, Seongdong-gu, Seoul, Republic of Korea",
        "Unresolved consumer disputes may be submitted to the Korea Consumer Agency or Consumer Dispute Settlement Commission.",
      ],
    },
  ],
};

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "취소 및 환불 정책 | Refund Policy — EPOCHA" },
      { name: "description", content: "EPOCHA 교육서비스 취소 및 환불 정책" },
    ],
  }),
  component: () => <LegalDocumentPage ko={ko} en={en} />,
});
