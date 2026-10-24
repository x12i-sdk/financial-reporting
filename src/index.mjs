import assert from 'node:assert/strict';
import { buildReportingPackage } from '@x12i/financial-reporting';
const period = { start: '2026-01-01', endExclusive: '2027-01-01' };
const result = buildReportingPackage({ schemaVersion: '1.0', entityId: 'demo', ledgerId: 'general', period, basis: 'source_as_reported',
  components: [{ name: 'summary', basis: 'source_as_reported', measures: [{ measureId: 'demo.cash', amount: '125.00', currency: 'USD', basis: 'source_as_reported' }] }],
});
assert.equal(result.data.measures[0].measureId, 'demo.cash');
assert.equal(result.data.manifest.componentHashes.length, 1);
console.log({ manifest: result.data.manifest, release: result.data.release });
