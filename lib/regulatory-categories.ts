/** Static regulatory arbitrage categories — merged with Airtable counts when available */

export type RegulatoryCategory = {
  slug: string;
  name: string;
  headline: string;
  regulatory: string;
  why: string;
  copy: string;
  whyItMatters?: string[];
  payRange: string;
  /** Optional: full pay block for /directory/[slug] (cards still use payRange). */
  paySectionExtra?: string;
  barrierLevel: "Moderate" | "Higher" | "High" | "Highest";
};

export const REGULATORY_CATEGORIES: RegulatoryCategory[] = [
  {
    slug: "frac-sand-logistics",
    name: "Frac Sand Logistics",
    headline: "The 24-Hour Arbitrage Secret: How to work 30 extra days a year legally.",
    regulatory: "49 CFR 395.1(d)(1)",
    why: "Frac sand hauling is legal arbitrage in action.",
    copy: `The Regulatory Edge:
- Frac sand drivers qualify for the 49 CFR 395.1(d)(1) 24-hour restart.
- Standard OTR drivers: Need 34 consecutive hours off to reset their 70-hour/8-day clock.
- Frac sand drivers: Need only 24 hours off to reset.
- Real impact: ~30% more billable working days per month than standard regional drivers.

Have you ever wondered why some oilfield drivers work more days per year without burning out? It's not about toughness. It's about the rules.

Pay models and ranges (hourly W2 vs percentage-of-load) are summarized in the Pay section below—always confirm what you are signing.

The guarantee:
The $1,800 weekly floor is unconditional show-up pay. Equipment failure at the site? You still get paid. Long line at the sand box? You still get paid.

W2 vs. 1099 math:
- W2 advantage: $12,500 overtime deduction (2026 tax law change), employer pays 50% of FICA.
- Scenario: W2 driver earning $120k gross = ~$115k net (after taxes).
- 1099 reality: 15.3% self-employment tax, no overtime deduction, full FICA, equipment + insurance costs.
- Scenario: 1099 driver earning $140k gross = ~$110k net (after taxes + expenses).

A W2 driver at $120k can take home more than a 1099 driver at $140k.

Operational perks & standards:
- Modern equipment standard: 2024 or newer (Freightliner Cascadia, Mack Anthem).
- Refrigerators and APUs included.
- No driver-facing cameras.
- Orientation pay: $150-$250/day for 3-5 days.
- Boot allowance: $250/year + semi-annual FRC renewal.

Better equipment = fewer breakdowns = more days you can work = more money in your pocket.`,
    whyItMatters: [
      "Real companies hiring in this lane include Detmar Logistics and Trikon Trucking, with compensation often listed from roughly $1,800 to $2,700 per week and growth in hiring activity.",
      "Alignment check: this lane rewards drivers comfortable with 60-70 hour weeks and paid waiting time at frac sites.",
      "If you have sandbox/pneumatic experience (or are willing to learn), this category can fit well.",
      "You now know why the structure is different; next step is applying the hiring framework at /ebook.",
    ],
    payRange: "$20–$30/hr or % of load · up to ~$182K/yr",
    paySectionExtra: `Hourly company drivers: $20–$30/hr · Annual $78K–$114K

Percentage-of-load drivers: 26–30% of gross · Weekly $1,800–$3,500 · Annual $93K–$182K

Pay structure varies by company. Know which model you're signing before you roll.`,
    barrierLevel: "Moderate",
  },
  {
    slug: "water-vacuum-management",
    name: "Water & Vacuum Management",
    headline: "The 6:1 Ratio: Constant Demand = Stable Pay",
    regulatory: "49 CFR 395.1(d)(1) + 4-6:1 water-to-oil ratio",
    why: "Recession-proof ratios make this one of the steadiest lanes in oilfield trucking.",
    copy: `Recession-proof ratios:
Hauling up to 6 barrels of water for every 1 barrel of oil.

The fundamental demand:
- Produced water volume in the Permian: 4-6 barrels per barrel of oil.
- Even if drilling slows, water hauling stays constant.
- You cannot produce oil without also producing water.
- Result: one of the most recession-proof categories in oilfield trucking.

The regulatory edge:
- Water drivers also qualify for the 49 CFR 395.1(d)(1) 24-hour restart.
- Same advantage as sand: ~30% more working days per month.

What if there is a category of oilfield work that stays busy even when drilling slows down?

Compensation math (typical structured week) is summarized in the Pay section below: base hourly on a 70-hour week, weekly gross, and annual range.

High-volume strategy:
- Short-haul optimization: multiple loads per shift.
- Experienced drivers complete 4-6 loads per shift (vs. 2-3 for average).
- Often load-based or percentage pay (vs. hourly).
- The math: more loads = more money.

SWD (salt water disposal) sites can queue up—plan for site time when you map your week.

Experienced high-volume operators can still push weekly totals higher by stacking loads—see hiring posts and lane specifics.

W2 vs. 1099 lens:
- Same tax reality as frac sand.
- A W2 driver at $85k can take home more safely than a 1099 driver at $110k carrying full operating costs.
- Strong W2 water drivers in the band above can out-net independent contractors covering insurance and major repairs.

Insider perspective:
Water and vacuum operations are high-volume. The trucks get dirty. The work is not glamorous.
This lowers the barrier to entry. Reliability beats prestige.
Companies often reward equipment care because vacuum trucks and tankers need disciplined upkeep.`,
    whyItMatters: [
      "If you want consistent year-round work over seasonal spikes, this lane fits that profile.",
      "Lower barrier to entry can mean less experience gatekeeping for dependable drivers.",
      "Success comes from short-haul, high-frequency execution and load optimization.",
      "If steady, predictable demand matters most, this is a strong lane to evaluate before applying the /ebook framework.",
    ],
    payRange: "$23–$25/hr · $101K–$110K/yr",
    paySectionExtra: `Base: $23–$25/hr
70-hour week
Weekly gross: $1,955–$2,125
Annual: $101K–$110K

This is the entry point. Water moves whether crude is up or down. The 4:1 ratio means this lane never stops.`,
    barrierLevel: "Moderate",
  },
  {
    slug: "fuel-hydrocarbon-transport",
    name: "Fuel & Hydrocarbon Transport",
    headline: "Hazmat Premiums: $38/hr pay without the $200k truck debt.",
    regulatory: "X endorsement (tanker / hazmat)",
    why: "Certification gatekeeping creates the strongest hourly premium in this ecosystem.",
    copy: `The certification premium:
- Requires X (Tanker/Hazmat) endorsement.
- Not everyone has it = higher pay for those who do.
- High-value cargo and higher liability push rates up.
- Result: among the highest hourly rates in oilfield trucking.

Regulatory position:
- No special 24-hour restart (different than sand/water).
- Hazardous cargo means higher liability and tighter handling rules—carriers price that into rates and premiums.

What if the specialty that takes the most training also pays the premium that makes it worthwhile?

Fuel vs propane vs crude pay bands are summarized in the Pay section below—always confirm product and pay model with the carrier.

Sign-on reality:
- Up to $4,000 for drivers with X endorsement.
- Competition for qualified hazmat drivers is intense.

Fuel haulers often command the highest hourly rates in oilfield trucking. The endorsement is the gate.

W2 vs. 1099 lens:
High-earning fuel drivers around $110k W2 can out-net 1099 fuel haulers around $140k, while also receiving employer-provided support benefits.

Operational standards:
- Fleet age often 2024 or newer (Freightliner Cascadia standard).
- Automatic Emergency Braking (AEB) equipped.
- No driver-facing cameras.
- Per diem common in Permian markets.`,
    whyItMatters: [
      "This lane rewards drivers who can handle hazardous cargo responsibility and operational pressure.",
      "If you do not have X endorsement yet, your decision is simple: train up or pick a different lane.",
      "Companies like Badlands Tank Lines and Schwerman are examples of the retention-heavy, premium-pay environment in this category.",
      "One additional certification can materially change annual income potential.",
    ],
    payRange: "$28–$38/hr · $325–$500/day crude · $105K–$145K/yr",
    paySectionExtra: `Fuel/diesel: $28–$35/hr · Annual $105K–$141K

Propane transport: $35–$38/hr · Annual $125K–$140K

Crude oil day rate: $325–$500/day · Annual $115K–$145K

Fuel doesn't stop when drilling slows. This is the most recession-resistant lane in the sector.`,
    barrierLevel: "Higher",
  },
  {
    slug: "flatbed-rig-moves",
    name: "Flatbed & Rig Moves",
    headline: "Winch Truck Mastery: $1,500 daily rates for the oilfield elite.",
    regulatory: "49 CFR 395.1(d)(2) waiting time exemption",
    why: "Technical specialization and exemption mechanics create elite daily-rate potential.",
    copy: `The technical barrier:
- This is one of the most technically demanding niches in oilfield trucking.
- Requires specialized winch truck operator capability/training.
- High-risk work: drilling equipment moves and complex rigging.
- Result: some of the highest daily rates in the field.

Regulatory edge:
- Specialized equipment drivers can use 49 CFR 395.1(d)(2) waiting time exemption.
- Specially trained drivers in specially constructed vehicles can log waiting time as off-duty.
- This can effectively pause portions of the 14-hour clock during site time.
- Impact: operators can stay at site much longer and still complete legal return movement.

Sand and water trucks do not qualify the same way. Winch trucks and specialized well-service equipment can.

What if one technical skill tier changes the whole pay structure?

Role-based pay bands (winch vs rig specialist vs heavy haul) are summarized in the Pay section below.

Rig-move operators are among the most specialized drivers in oilfield trucking. Their pay reflects it.

W2 vs. 1099 lens:
Operators near $100k W2 with employer-paid benefits can out-earn 1099 owner-operators at higher gross once insurance, risk, and liability costs are included.

Operational standards:
- Specialized fleets (often newer equipment)
- Employer-provided, employer-maintained assets
- Longer onboarding and field training with senior operators
- Premium per diem in remote job-site contexts`,
    payRange: "$23–$84/hr by role · $95K–$180K/yr",
    paySectionExtra: `Winch truck: $23–$35/hr · Annual $95K–$115K

Rig move specialist: $35–$84/hr · Annual $110K–$145K

Heavy haul OTR: $40–$48/hr · Annual $115K–$180K

Rig moves can push 80–100 hours in a single week. The exemption means the clock works in your favor.`,
    barrierLevel: "Highest",
  },
];

export function getCategoryBySlug(slug: string): RegulatoryCategory | undefined {
  return REGULATORY_CATEGORIES.find((c) => c.slug === slug);
}
