export class ConsumptionDetailsValidator {
     premiseIdValidator(premiseId: string): boolean {
      if (!premiseId) {
        return false;
      }
      if (premiseId.length < 10 || premiseId.length > 14) {
        return false;
      }
      if (!/^[A-Z0-9]+$/.test(premiseId)) {
        return false;
      }
      return true;
    }
  }
  