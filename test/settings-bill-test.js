describe('The bill settings with factory function', function () {
    it('It should be able to set call cost', function () {
        let settingsBill = BillWithSethings();

        settingsBill.setCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost());

        let settingsBill2 = BillWithSethings();

        settingsBill2.setCallCost(2.85);
        assert.equal(2.85, settingsBill2.getCallCost());
    });
    it('It should be able to set sms cost', function () {
        let settingsBill = BillWithSethings();
        settingsBill.setSmsCost(0.85);
        assert.equal(0.85, settingsBill.getSmsCost());

        let settingsBill2 = BillWithSethings();

        settingsBill2.setSmsCost(0.50);
        assert.equal(0.50, settingsBill2.getSmsCost());
    });
    it('It should be able to set the warning level', function () {
        let settingsWarningLevel = BillWithSethings();
        settingsWarningLevel.setWartingLevel(10);
        assert.equal(10, settingsWarningLevel.getWartingLevel());

        let settingsWarningLevel2 = BillWithSethings();
        settingsWarningLevel2.setWartingLevel(15);
        assert.equal(15, settingsWarningLevel2.getWartingLevel());
    });
    it('It should be able to set the critical level', function () {
        let settingsCriticalLevel = BillWithSethings();

        settingsCriticalLevel.setCriticalLevel(20);
        assert.equal(20, settingsCriticalLevel.getCriticalLevel());

        let settingsCriticalLevel2 = BillWithSethings();

        settingsCriticalLevel2.setCriticalLevel(20);
        assert.equal(20, settingsCriticalLevel2.getCriticalLevel());
    });
});
describe('Use values ', function () {
    it('', function () {

        let settingsBill = BillWithSethings();
        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.75);
        
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(6.75,settingsBill.getTotalCost());
        assert.equal(6.75,settingsBill.getTotalCallCost());
        assert.equal(0.00,settingsBill.getTotalSmsCost()); 

    });
});