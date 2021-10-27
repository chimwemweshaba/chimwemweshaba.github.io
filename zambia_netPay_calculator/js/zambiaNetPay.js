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

//Constants
const MAX_NAPSA = 1159.40;
const YEAR = 2021
const NAPSA_RATE = 0.05;

//Bands
const BAND1_MAX_VALUE = 3300;
const BAND2_MAX_VALUE = 4100;
const BAND3_MAX_VALUE = 6200;

//Tax Rates
const BAND1_TAX_RATE = 0;
const BAND2_TAX_RATE = 0.25;
const BAND3_TAX_RATE = 0.30;
const BAND4_TAX_RATE = 0.375;

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
    return grossPay;
}

function get_grossPay()
{
    console.log(this.grossPay);
    return this.grossPay;
}

//calculate napsa
function calculate_napsa()
{
    if (checkbox_NAPSA.checked == true)
    {
        this.napsa = this.grossPay * 0.05;

        if (this.napsa > MAX_NAPSA)
        {
            this.napsa = MAX_NAPSA;
        }
    } 
    else 
    {
        this.napsa = 0;
    }
    return this.napsa;
}

//calculate paye
function calculate_paye()
{
    return this.paye;
}

//calculate nhis
function calculate_nhis(checkbox_NHIS)
{
    if (checkbox_NHIS.checked == true)
    {
        this.nhis = this.basicPay * 0.01;
    } 
    else 
    {
        this.nhis = 0;
    }

    console.log(this.nhis);

    return nhis;
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
    
    return totalDeductions;
}

//calculate netPay
function calculate_netPay()
{

    this.netPay = this.grossPay - this.totalDeductions;

    return netPay;
}

//submit buttom
function onClick_reset()
{
    initialize();
}
