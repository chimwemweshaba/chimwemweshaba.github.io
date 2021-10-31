//Global variable declaration
//Allowances
var basicPay = 0;
var housing = 0;
var transport = 0;
var otherAllowances = 0;
var grossPay = 0;
var initialValue = 0;

//Deductions
var napsa = 0;
var paye = 0;
var nhis = 0;
var otherDeductions = 0;
var totalDeductions = 0;

//netPay
var netPay = 0;
var bal = 0;

//CONSTANT
//Year
const YEAR = 2021

//Napsa
const MAX_NAPSA = 1159.40
const NAPSA_RATE = 0.05;

//NHIS
const NHIS_RATE = 0.01;

//PAYE
//Bands
const BAND1_MAX_VALUE = 4000;
const BAND2_MAX_VALUE = 4800;
const BAND3_MAX_VALUE = 6900;

//band values
var band1_value = 0;
var band2_value = 0;
var band3_value = 0;
var band4_value = 0;

//band tax
var band1_tax = 0;
var band2_tax = 0;
var band3_tax = 0;
var band4_tax = 0;

//Tax Rates
const BAND1_TAX_RATE = 0;
const BAND2_TAX_RATE = 0.25;
const BAND3_TAX_RATE = 0.30;
const BAND4_TAX_RATE = 0.375;

//Max Band Tax
var band1_max_tax = BAND1_MAX_VALUE * BAND1_TAX_RATE;
var band2_max_tax = (BAND2_MAX_VALUE - BAND1_MAX_VALUE) * BAND2_TAX_RATE;
var band3_max_tax = (BAND3_MAX_VALUE - BAND2_MAX_VALUE) * BAND3_TAX_RATE;

//initialize
function initialize()
{
    //Allowances
    basicPay = 0;
    housing = 0;
    transport = 0;
    otherAllowances = 0;
    grossPay = 0;
    initialValue = 0;

    //Deductions
    initialize_deductions();

    //netPay
    netPay = 0;
}

//initilizeDeductions
function initialize_deductions()
{
    //Deductions
    napsa = 0;
    paye = 0;
    nhis = 0;
    otherDeductions = 0;
    totalDeductions = 0;
}

//calculate grosspay
function calculate_grossPay(basicPay, housing, transport, otherAllowances)
{

    this.basicPay = Number(basicPay.value);
    this.housing = Number(housing.value);
    this.transport = Number(transport.value);
    this.otherAllowances = Number(otherAllowances.value);

    this.grossPay = this.basicPay + this.housing + this.transport + this.otherAllowances;

    console.log(this.grossPay);
    return grossPay.toFixed(2);
}

function get_grossPay()
{
    console.log(this.grossPay);
    return grossPay.toFixed(2);
}

//calculate napsa
function calculate_napsa(checkbox_NAPSA)
{
    if (checkbox_NAPSA.checked == true)
    {
        this.napsa = this.grossPay * NAPSA_RATE;

        if (this.napsa > MAX_NAPSA)
        {
            this.napsa = MAX_NAPSA;
        }
    } 
    else 
    {
        this.napsa = 0;
    }
    return napsa.toFixed(2);
}

//checked paye
function checked_paye(checkbox_PAYE)
{
    if (checkbox_PAYE.checked == true)
    {
        calculate_paye();
    } 
    else 
    {
        this.paye = 0;
    }
    return paye.toFixed(2);
}

//calculate paye
function calculate_paye()
{
    if (grossPay <= BAND1_MAX_VALUE)
    {
        band1_value = grossPay;
        band1_tax = band1_value * BAND1_TAX_RATE;
        paye = band1_tax;
    }
    if (BAND1_MAX_VALUE <= grossPay && grossPay <= BAND2_MAX_VALUE)
    {
        band2_value = grossPay - BAND1_MAX_VALUE;
        band2_tax = band2_value * BAND2_TAX_RATE;
        paye = band1_max_tax + band2_tax;
    }
    else if (BAND2_MAX_VALUE <= grossPay && grossPay <= BAND3_MAX_VALUE)
    {
        band3_value = grossPay - BAND2_MAX_VALUE;
        band3_tax = band3_value * BAND3_TAX_RATE;
        paye = band1_max_tax + band2_max_tax + band3_tax;
    }
    else if (grossPay  > BAND3_MAX_VALUE)
    {
        band4_value = grossPay - BAND3_MAX_VALUE;
        band4_tax = band4_value * BAND4_TAX_RATE;
        paye = band1_max_tax + band2_max_tax + band3_max_tax + band4_tax;
    }
    return paye.toFixed(2);
}

//calculate nhis
function calculate_nhis(checkbox_NHIS)
{
    if (checkbox_NHIS.checked == true)
    {
        this.nhis = this.basicPay * NHIS_RATE;
    } 
    else 
    {
        this.nhis = 0;
    }

    console.log(this.nhis);

    return nhis.toFixed(2);
}

//set_otherDeductions
function set_otherDeductions(otherDeductions)
{
    this.otherDeductions = Number(otherDeductions.value);

    return calculate_totalDeductions();
}

//calculate totalDeductions
function calculate_totalDeductions()
{
    this.totalDeductions = this.napsa + this.paye + this.nhis + this.otherDeductions;
    
    return totalDeductions.toFixed(2);
}

//calculate netPay
function calculate_netPay()
{

    this.netPay = this.grossPay - this.totalDeductions;

    return netPay.toFixed(2);
}

//submit buttom
function onClick_reset()
{
    initialize();
}

//output_napsaRate
function  get_napsaRate()
{
    return NAPSA_RATE * 100;
}

//output_napsaMaxValue
function get_napsa_MaxValue()
{
    return MAX_NAPSA.toFixed(2);
}

//output_nhisRate
function  get_nhisRate()
{
    return NHIS_RATE * 100;
}

//get_year
function get_year()
{
    return YEAR;
}

//GET_BAND_MAX_VALUES
//get_band1_max_amount
function get_band1_max_amount()
{
    return BAND1_MAX_VALUE.toFixed(2);
}

//get_band2_max_amount
function get_band2_max_amount()
{
    return BAND2_MAX_VALUE.toFixed(2);
}

//get_band3_max_amount
function get_band3_max_amount()
{
    return BAND3_MAX_VALUE.toFixed(2);
}

//GET_BAND_TAX_RATES
//band1_tax_rate
function get_band1_tax_rate()
{
    return BAND1_TAX_RATE * 100;
}

//band2_tax_rate
function get_band2_tax_rate()
{
    return BAND2_TAX_RATE * 100;
}

//band3_tax_rate
function get_band3_tax_rate()
{
    return BAND3_TAX_RATE * 100;
}

//band4_tax_rate
function get_band4_tax_rate()
{
    return BAND4_TAX_RATE * 100;
}
