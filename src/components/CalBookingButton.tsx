"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalBookingButton() {
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
    <button
      type="button"
      data-cal-namespace="mobil-bilklargoering"
      data-cal-link="torpal-xt9cqn/mobil-bilklargøring"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":true}'
      className="rounded-lg bg-black px-6 py-3 font-semibold text-white transition hover:bg-neutral-800"
    >
      Book klargøring
    </button>
  );
}