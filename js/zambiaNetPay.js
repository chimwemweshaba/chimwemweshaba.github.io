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
const MAX_NAPSA = 1149.60;
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

//calculate grosspay
function calculate_grossPay(basicPay, housing, transport, otherAllowances)
{
    this.basicPay = basicPay;
    this.housing = housing;
    this.transport = transport;
    this.otherAllowances = otherAllowances;

    this.grossPay = this.basicPay + this.housing + this.transport + this.otherAllowance;

    return this.grossPay;
}

//calculate napsa
function calculate_napsa()
{
    return this.napsa;
}

//calculate paye
function calculate_paye()
{
    return this.paye;
}

//calculate nhis
function calculate_nhis()
{
    return this.nhis;
}

//calculate totalDeductions
function calculate_totalDeductions(napsa, paye, nhis, otherDeductions)
{
    this.napsa = napsa;
    this.paye = paye;
    this.nhis = nhis;
    this.otherDeductions = otherDeductions;

    this.totalDeductions = this.napsa + this.paye + this.nhis + this.otherDeductions;

    return this.totalDeductions;
}

//calculate netPay
function calculate_netPay(grossPay, totalDeductions)
{
    this.grossPay = grossPay;
    this.totalDeductions = totalDeductions;

    this.netpay = this.grossPay - this.totalDeductions;

    return this.netpay;
}
