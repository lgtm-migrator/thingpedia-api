// -*- mode: js; indent-tabs-mode: nil; js-basic-offset: 4 -*-
//
// This file is part of ThingEngine
//
// Copyright 2015 The Board of Trustees of the Leland Stanford Junior University
//
// Author: Giovanni Campagna <gcampagn@cs.stanford.edu>
//
// See COPYING for details
"use strict";

const Messaging = require('./lib/messaging');
const BaseDevice = require('./lib/base_device');
const BaseChannel = require('./lib/base_channel');
const Utility = require('./lib/utilities');
const Helpers = require('./lib/helpers');
const Classes = require('./lib/classes');
const TripleStore = require('./lib/triplestore');
const ObjectSet = require('./lib/object_set');
const ConfigDelegate = require('./lib/config_delegate');

const VERSION = {
    major: 1,
    minor: 3,
    valueOf() {
        return this.major * 100 + this.minor;
    },
    compatible(v) {
        if (typeof v === 'number')
            return this.valueOf() >= v && Math.floor(v/100) === this.major;
        else
            return this.major === v.major && this.minor >= v.minor;
    },
    hasFeature(f) {
        switch (f) {
        case 'rss':
            return true;
        default:
            return false;
        }
    }
}

module.exports = {
    BaseDevice: BaseDevice,
    OnlineAccount: Utility.OnlineAccount,

    BaseChannel: BaseChannel,
    PollingTrigger: Utility.PollingTrigger,
    HttpPollingTrigger: Utility.HttpPollingTrigger,
    RSSPollingTrigger: Utility.RSSPollingTrigger,
    SimpleAction: Utility.SimpleAction,

    DeviceClass: Classes.DeviceClass,
    ThingClass: Classes.DeviceClass,
    ChannelClass: Classes.ChannelClass,
    TriggerClass: Classes.ChannelClass,
    ActionClass: Classes.ChannelClass,
    QueryClass: Classes.ChannelClass,

    Availability: BaseDevice.Availability,
    Tier: BaseDevice.Tier,

    Messaging: Messaging,
    ConfigDelegate: ConfigDelegate,

    Helpers: Helpers,

    TripleStore: TripleStore,

    ObjectSet: ObjectSet,

    version: VERSION
};
