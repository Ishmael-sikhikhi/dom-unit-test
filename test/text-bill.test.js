describe('should calcatulate text bill using Factory Function', function(){
   
    it("should be able to calculate total sms when text is 'sms'", function(){
        let textBill = textBills();

        textBill.setBillType('sms');
        assert.equal(0.75,textBill.getSmsTotalCost());
    });
    it("should be able to calculate total from bill type 'call'", function(){
        let textBill = textBills();

        textBill.setBillType('call');
        assert.equal(2.75,textBill.getTotalCost());
    }); 
    it("should be able to calculate total when call is been made and sms is been sent", function(){
        let textBill = textBills();

        textBill.setBillType('call');
        textBill.setBillType('sms')
        assert.equal(3.50,textBill.getTotalCost());

    });
    it("should be able to calculate total from bill type 'sms'", function(){
        let textBill = textBills();

        textBill.setBillType('sms');
        assert.equal(0.75,textBill.getTotalCost());
    }); 
    it("should be able to add from total the bill type 'call'", function(){
        let textBill = textBills();
        textBill.setBillType('sms');
        textBill.setBillType('call');
        assert.equal(3.50,textBill.getTotalCost());
    }); 
    it("should be able to add from total the bill type 'sms'", function(){
        let textBill = textBills();
        textBill.setBillType('sms');
        textBill.setBillType('call');
        textBill.setBillType('sms');
        textBill.setBillType('sms');
        assert.equal(5,textBill.getTotalCost());
    });
    describe('waring & critical values', function(){
        it("it should return a class of 'warning' if warning level is been reached", function(){
            let textBill = textBills();
    
            textBill.setBillType('sms');
            textBill.setBillType('call');
            textBill.setBillType('sms');
            textBill.setBillType('sms');
            textBill.setBillType('sms');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            
            assert.equal('warning',textBill.totalClassName());
        }); 
        it("it should return a class of 'critical' if critical level is been reached", function(){
            let textBill = textBills();
    
            textBill.setBillType('sms');
            textBill.setBillType('call');
            textBill.setBillType('sms');
            textBill.setBillType('sms');
            textBill.setBillType('sms');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('sms');
            textBill.setBillType('sms');
            textBill.setBillType('sms');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            textBill.setBillType('call');
            
            assert.equal('critical',textBill.totalClassName());
        }); 
    });
    
});