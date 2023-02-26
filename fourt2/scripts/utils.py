import os
from pprint import pprint

from web3 import Web3
from brownie import accounts, config, network

FORKED_LOCAL_ENVIRONMENTS = set(["mainnet-fork"])
LOCAL_BLOCKCHAIN_ENVIRONMENTS = set(["development", "Ganache-Local"])

DECIMALS = 8
STARTING_PRICE = 200000000000

def get_account(other=False):
    if any([
        network.show_active() in LOCAL_BLOCKCHAIN_ENVIRONMENTS,
        network.show_active() in FORKED_LOCAL_ENVIRONMENTS,
    ]):
        pprint(network.show_active())
        account = accounts[0] if not other else accounts[1]
    else:
        '''multiple ways to get the account:'''
        if not other:
            # account = accounts.load("dev")
            account = accounts.add(config["wallets"]["from_key"])
            # account = accounts.add(os.getenv("DEV_PRIV_KEY"))
        else:
            account = accounts.add(config["wallets"]["from_other_key"])


    print(f"{account=}")
    return account
