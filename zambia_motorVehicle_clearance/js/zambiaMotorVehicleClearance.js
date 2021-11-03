var main_HS_code;
var main_HS_desc;

function get_main_HS_desc(HS_code)
{
    switch (HS_code)
    {
        case 'hs_8702':
        {
            this.main_HS_desc = "Motor vehicles for the transport of ten or more persons, including the driver"
            break;
        }

        case 'hs_8703':
        {
            this.main_HS_desc = "Motor cars and other motor vehicles principally designed for the transport of persons (other than those of heading 87.02), including station wagons and racing cars."
            break;
        }

        case 'hs_8704':
        {
            this.main_HS_desc = "Motor vehicles for the transport of goods."
            break;
        }

        default:
        {
            this.main_HS_desc = "Select Main HS Code"
            break;
        }
    }
    return main_HS_desc;
}