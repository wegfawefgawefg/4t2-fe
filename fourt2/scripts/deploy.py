import json
import os

from web3 import Web3
from brownie import accounts, config, network
from brownie import Account

from scripts import utils

def deploy():
    print("Deploying Contract...")
    account = utils.get_account()
    contract = Account.deploy({"from": account})   
    print(f"deployed at {contract.address}")

    # dump the abi
    with open("contract_abi.json", "w") as f:
        json.dump(contract.abi, f)
    return contract

def main():
    deploy()
