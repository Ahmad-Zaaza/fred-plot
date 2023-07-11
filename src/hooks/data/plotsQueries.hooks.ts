export const plotsQueryKeys = {
  all: [{ scope: "plots" }] as const,
  T10Y2Y: () => [{ ...plotsQueryKeys.all[0], entity: "T10Y2Y" }] as const,
  GDPCA: () => [{ ...plotsQueryKeys.all[0], entity: "GDPCA" }] as const,
  "DGS10-T10YIE": () =>
    [{ ...plotsQueryKeys.all[0], entity: "DGS10-T10YIE" }] as const,
};


