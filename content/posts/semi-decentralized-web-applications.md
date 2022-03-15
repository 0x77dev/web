---
title: Semi-decentralized web applications
date: 2022-03-15T00:00:00.005Z
draft: false
tags: ['decentralized', 'web', 'semi-decentralized', 'web3', 'dstack', 'ipfs']
---

## What is semi-decentralized?

The decentralized environment has no leads, no one controls the application.

This is not a good thing for regulations and businesses, but peer-to-peer applications have a lot of benefits like no server infrastructure, all computations are on the peer-side is not on a server-side.

So semi-decentralized applications have a single source of truth, it is handled using relay peers and cryptography, it provides a possibility to take some load off the server infrastructure, distribute content between peers without server infrastructure. It would minimize latencies and would provide a possibility to share events and data between clients without server infrastructure.

## What would power semi-decentralized applications on the web?

[WebRTC](https://webrtc.org/) looks like only one and actually a pretty good solution, cryptography can be handled using [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API), and [Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) can provide a possibility to intercept and inject fetch requests to redistribute content among the peers.

## Solution

[IPFS (js-ipfs)](https://js.ipfs.io/) can handle [identity/cryptography](https://docs.libp2p.io/concepts/peer-id/), [PubSub messaging](https://github.com/ipfs/js-ipfs/blob/master/docs/core-api/PUBSUB.md), [data sharing](https://github.com/ipfs/js-ipfs/blob/master/docs/core-api/BLOCK.md) and [many more](https://github.com/ipfs/js-ipfs/tree/master/docs/core-api#ipfs-core-api).

Also IPFS is [content addressable](https://en.wikipedia.org/wiki/Content-addressable_storage) by that we can ensure that we getting original information, it is cannot be faked or modified by other peers.

_See [Content-addressed vs. location-addressed on Wikipedia](https://en.wikipedia.org/wiki/Content-addressable_storage#Content-addressed_vs._location-addressed)._

[also it supports WebRTC transport out of the box](https://www.npmjs.com/package/libp2p-webrtc-star)

**IPFS is the find of the century for such an idea.**

All that has left is to create a library to wrap IPFS, bootstrapping, and provide an API for such requirements.

That's why I started developing [DStack](https://dstack.dev)

## Demo

For example, you can create a collaborative real-time WYSIWYG editor with file preview support where all events and file previews are handled without your server infrastructure. The server is needed to initiate peers connection and store final document.

![WYSIWYG editor](/large/dstack-demo.gif)

---

You can already play with [DStack](https://dstack.dev) proof-of-concept.
