export const currency = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    useGrouping: true,
    maximumSignificantDigits: 3
 });