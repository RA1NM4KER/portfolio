export type SchoolscapeMetric = {
  value: string;
  label: string;
  detail: string;
};

export type SchoolscapePipelineStep = {
  title: string;
  detail: string;
};

export type SchoolscapeWorkstream = {
  title: string;
  detail: string;
  result: string;
};

export type SchoolscapeFieldOutcome = {
  field: string;
  result: string;
  detail: string;
};

export type SchoolscapeProject = {
  title: string;
  summary: string;
  role: string;
  engagement: string;
  location: string;
  metrics: readonly SchoolscapeMetric[];
  pipeline: readonly SchoolscapePipelineStep[];
  workstreams: readonly SchoolscapeWorkstream[];
  fieldOutcomes: readonly SchoolscapeFieldOutcome[];
  principles: readonly { title: string; detail: string }[];
  handover: readonly { title: string; detail: string }[];
  webDelivery: readonly string[];
  boundary: string;
};
