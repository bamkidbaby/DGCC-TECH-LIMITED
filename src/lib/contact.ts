export const contactDetails = {
  phoneDisplay: "+234 704 537 1328",
  phoneHref: "tel:+2347045371328",
  whatsappNumber: "2347045371328",
  email: "support@dgcctechltd.com",
  address:
    "3, Akinguroye Street, Toluwalase Estate, ASB Bus Stop, Oke Aro, Ogun State.",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=3%2C+Akinguroye+Street%2C+Toluwalase+Estate%2C+ASB+Bus+Stop%2C+Oke+Aro%2C+Ogun+State",
} as const;

export function createWhatsAppHref(message: string) {
  return `https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
