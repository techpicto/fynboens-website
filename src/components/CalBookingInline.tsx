"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

/* Inline Cal.com-booking. Bemærk: calLink SKAL indeholde "ø" (den offentlige
   adresse er cal.com/torpal-xt9cqn/mobil-bilklargøring), mens namespace er
   uden danske bogstaver. */
export default function CalBookingInline() {
  useEffect(() => {
    async function initializeCal() {
      const cal = await getCalApi({
        namespace: "mobil-bilklargoering",
      });

      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    }

    initializeCal();
  }, []);

  return (
    <div
      id="booking"
      className="w-full scroll-mt-24 overflow-hidden rounded-3xl bg-white p-2 sm:p-4"
    >
      <Cal
        namespace="mobil-bilklargoering"
        calLink="torpal-xt9cqn/mobil-bilklargøring"
        style={{
          width: "100%",
          minHeight: "850px",
        }}
        config={{
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
        }}
      />
    </div>
  );
}
