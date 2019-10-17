function calculateYears(principal, interest, tax, desired) {
   let year=0;
   while (principal<desired){year++; principal=principal+((principal*interest)-(principal*interest*tax))}
   return year
}
