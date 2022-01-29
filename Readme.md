# Portfolio Overlap

![gif1](./Assets/demo.gif)

To find the percentage overlap of stocks in current mutual fund potfolio and the fund you want to compare

Your program take as input:

1. Name of current funds the user holds in his/her portfolio.
2. New funds to be added.
3. Stock to be added for existing fund.

The output should be
1. Overlapping stocks of the new fund with the current funds.
2. If a given fund name is not present while calculating overlap or adding stocks to existing fund, the output should be FUND_NOT_FOUND.

# CURRENT_PORTFOLIO

The CURRENT_PORTFOLIO command receives the current funds that the user holds in his/her portfolio


Format - CURRENT_PORTFOLIO FUND_NAME_1 FUND_NAME_2

Example- CURRENT_PORTFOLIO AXIS_BLUECHIP ICICI_PRU_BLUECHIP means that the current fund that the user holds in his/her portfolio are AXIS_BLUECHIP and ICICI_PRU_BLUECHIP

# CALCULATE_OVERLAP

The CALCULATE_OVERLAP command receives the fund name and calculates the overlap between that fund with each fund in the current portfolio.


Format - CALCULATE_OVERLAP FUND_NAME

Example - CALCULATE_OVERLAP AXIS_BLUECHIP means calculate the percentage of overlapping stocks of AXIS_BLUECHIP with each fund that the user holds in his/her current portfolio.

This command should print the overlapping percentages of the given fund with the existing funds in the portfolio.

Format - FUND_NAME EXISTING_FUND OVERLAP_PERCENTAGE%

Example - If you have 3 funds in your portfolio, the CALCULATE_OVERLAP command should print the overlapping percentage of stocks (if its greater than zero) for the given fund with all the funds that the user holds in his/her current portfolio..

# ADD_STOCK

The ADD_STOCK command receives the fund name to which the new stock will be added and the name of the new stock.

Format - ADD_STOCK FUND_NAME STOCK_NAME
Example - ADD_STOCK AXIS_BLUECHIP HDFC BANK LIMITED means we have to add the stock HDFC BANK LIMITED to AXIS_BLUECHIP fund.

# Assumptions

1. All the input funds will be those that are present in the available funds json provided

2. The overlap percentages will be rounded to 2 decimal points

3. The stocks names can have spaces in between, for eg: HDFC BANK LIMITED

# Setup

-           npm install

-           npm test            

-           npm start
