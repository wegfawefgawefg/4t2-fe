from pprint import pprint

import brownie
from brownie import accounts, config, network
from brownie import Account

from scripts import utils

def test_all():
    account = utils.get_account()
    contract = Account.deploy({"from": account})   

    # get balance
    balance = contract.get_balance({"from": account})
    print(f"balance of {str(account)[:4]}... : {balance}")

    # test deposit
    contract.deposit({"from": account, "value": 100})

    # test withdraw
    balance = contract.get_balance({"from": account})
    print(f"balance of {str(account)[:4]}... : {balance}")

    contract.withdraw(1, {"from": account})
    balance = contract.get_balance({"from": account})
    print(f"balance of {str(account)[:4]}... : {balance}")
    assert balance == 99

    with brownie.reverts():
        contract.withdraw(100, {"from": account})
        balance = contract.get_balance({"from": account})
        print(f"balance of {str(account)[:4]}... : {balance}")    
        assert balance == 99
    
    with brownie.reverts():
        contract.withdraw(0, {"from": account})
        balance = contract.get_balance({"from": account})
        print(f"balance of {str(account)[:4]}... : {balance}")    
        assert balance == 99

    
