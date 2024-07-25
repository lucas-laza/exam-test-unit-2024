export type DateRange = {
  startDate: Date;
  endDate: Date;
};

export function isRangeAvailable(
  requestedRange: DateRange,
  availableRange: DateRange
): boolean {
  if (
    requestedRange.startDate >= availableRange.startDate // début dans range
    && requestedRange.endDate <= availableRange.endDate // fin dans range
    // Cette condition empeche d'avoir le cas de figure ou req.end est dans la range et req.start et en dehors mais quand même true car >= range.start
    // Ainsi nous évitions d'avoir beaucoup de tests du type : if requestedRange.startDate >= availableRange.startDate  || requestedRange.startDate <= availableRange.endDate 
    && requestedRange.startDate <= requestedRange.endDate // début inférieur à fin
  ) {
    return true
  } else {
    return false
  }
}
