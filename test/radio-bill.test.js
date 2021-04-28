describe ('The radio bill using Factory Function', function(){
    it('should be able to use the total cost, call total and sms when call is selected', function () {

        let radioBill = RadioBills();
        radioBill.selectRadioBill('call');        
    
        assert.equal(2.75,radioBill.getTotalCost());  
        assert.equal(2.75, radioBill.getCallTotalradioCost()) ;
        assert.equal(0,radioBill.getSmsTotalradioCost())       
    
    });
    it("should be able to calculate the total cost, call total and sms when 'sms' is selected" , function () {
    
        let radioBill = RadioBills(); 
        radioBill.selectRadioBill('sms');      
        assert.equal(0.75,radioBill.getTotalCost());
        assert.equal(0, radioBill.getCallTotalradioCost()) ;
        assert.equal(0.75,radioBill.getSmsTotalradioCost());
        
    });
    
    
    it("should be able to make a call and send the sms's and give total cost, call total and sms total", function () {
    
        let radioBill = RadioBills();    
         
        radioBill.selectRadioBill('sms'); 
        radioBill.selectRadioBill('call');       
        assert.equal(3.50,radioBill.getTotalCost());
        assert.equal(2.75, radioBill.getCallTotalradioCost()) ;
        assert.equal(0.75,radioBill.getSmsTotalradioCost());              

    });   
    describe('warning & critical level', function(){
        it("it should return a class of 'warning' if warning level is been reached",function(){
            let radioBill = RadioBills();           
            
            
            radioBill.selectRadioBill('sms'); 
            radioBill.selectRadioBill('call'); 
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call'); 
            radioBill.selectRadioBill('sms'); 
            radioBill.selectRadioBill('call'); 
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('sms');                  
            assert.equal('warning',radioBill.totalClassName());
            
        });
    
        it("it should return a class of 'critical' if critical level is been reached",function(){
            let radioBill = RadioBills();
            radioBill.selectRadioBill('sms'); 
            radioBill.selectRadioBill('call'); 
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call'); 
            radioBill.selectRadioBill('sms'); 
            radioBill.selectRadioBill('call'); 
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('sms'); 
            radioBill.selectRadioBill('call'); 
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            assert.equal('critical',radioBill.totalClassName());
        });
    });
});