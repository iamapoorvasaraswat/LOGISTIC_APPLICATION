trigger AssetTrigger on Invoice__c (after update) {
    EmailManagerStatus.sendMail (Trigger.New);
  }