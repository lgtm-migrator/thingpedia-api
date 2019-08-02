// -*- mode: js; indent-tabs-mode: nil; js-basic-offset: 4 -*-
//
// This file is part of ThingEngine
//
// Copyright 2015 The Board of Trustees of the Leland Stanford Junior University
//
// Author: Giovanni Campagna <gcampagn@cs.stanford.edu>
//
// See LICENSE for details
"use strict";

const Messaging = require('./lib/messaging');
const BaseDevice = require('./lib/base_device');
const Helpers = require('./lib/helpers');
const ObjectSet = require('./lib/object_set');
const ConfigDelegate = require('./lib/config_delegate');
const { OAuthError } = require('./lib/errors');
const BaseClient = require('./lib/base_client');
const HttpClient = require('./lib/http_client');
const DeviceFactory = require('./lib/factory');
const { ImplementationError, UnsupportedError } = require('./lib/errors');

const ThingTalk = require('thingtalk');

const VERSION = {
    major: 2,
    minor: 4,
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
        case 'value-types':
        case 'thingpedia-client':
            return true;
        default:
            return false;
        }
    }
};

module.exports = {
    version: VERSION,

    // APIs for implementers of Thingpedia interfaces
    BaseDevice,
    Availability: BaseDevice.Availability,
    Tier: BaseDevice.Tier,

    // interfaces (for documentation/type-checking only)
    Messaging,
    ConfigDelegate,
    ObjectSet,

    // helper libraries and portions of ThingTalk API that are public/stable
    Helpers,
    Value: {
        Entity: ThingTalk.Builtin.Entity,
        Currency: ThingTalk.Builtin.Currency,
        Location: ThingTalk.Builtin.Location,
        Time: ThingTalk.Builtin.Time
    },

    // APIs for users of Thingpedia interfaces
    BaseClient,
    HttpClient,
    DeviceFactory,

    // expose errors
    ImplementationError,
    UnsupportedError,
    OAuthError,
};
