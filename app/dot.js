"use client";
import React, { Component } from 'react';
import * as d3 from 'd3'
import 'd3-graphviz';

class Step1 extends Component {
  ref() {
      d3.select(".dot-step1").graphviz().renderDot(`digraph {
        rankdir="TB";
            splines=true;
            overlap=false;
            nodesep="0.2";
            ranksep="0.4";
            labelloc="t";
            fontname="Ovo,Red Hat Text";
            fontsize="11pt"
            bgcolor="#00000000"
                node [ shape="box" style="filled,rounded" margin=0.2 fontname="Red Hat Display,sans-serif" fontsize="11pt" color="#ffffffbb" fontcolor="#ffffffbb" fillcolor="#00363a" ]
                edge [ fontname="Red Hat Text" fontsize="11pt" color="#ffffffbb" fontcolor="#ffffffbb" ]
        "dfcb53ea9620b6ed8f92087c844040ba"[label="Scalar: anonymous"]
        "7227798056dc0d2bbd5e40f28d4f18ef"[label="Scalar: anonymous"]
        "9c97c91444b089fb3f73b3933d27ce6a"[label="Scalar: anonymous"]
        "178b88eb15765bc25d783b20cf8f53c7"[label="Scalar: anonymous"]
        "21d55e29caadc0c64e7c19f856cf55c3"[label="Scalar: anonymous"]
        "0bf0986d95aa55b17af3fea664c8cf3a"[label="Transformed: anonymous"]
        "0e691ed3748145491d2c73390ece07fd"[label="Transformed: anonymous"]
        "1ddf060098fd91392a55bb7caf927215"[label="Transformed (PEP): anonymous"]
        "59cc5eb442981d764714d2aa72b99539"[label="Transformed (PEP): remote_dataset" fillcolor="#006064"]
        "0e691ed3748145491d2c73390ece07fd" -> "178b88eb15765bc25d783b20cf8f53c7"[label="automatic_protected_paths"];
        "0e691ed3748145491d2c73390ece07fd" -> "9c97c91444b089fb3f73b3933d27ce6a"[label="automatic_public_paths"];
        "dfcb53ea9620b6ed8f92087c844040ba" -> "7227798056dc0d2bbd5e40f28d4f18ef"[label="attributes_budget"];
        "0bf0986d95aa55b17af3fea664c8cf3a" -> "0e691ed3748145491d2c73390ece07fd"[label="User Settings"];
        "7227798056dc0d2bbd5e40f28d4f18ef" -> "59cc5eb442981d764714d2aa72b99539"[label="budget_assignment"];
        "178b88eb15765bc25d783b20cf8f53c7" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
        "0e691ed3748145491d2c73390ece07fd" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
        "1ddf060098fd91392a55bb7caf927215" -> "59cc5eb442981d764714d2aa72b99539"[label="budget_assignment"];
        "21d55e29caadc0c64e7c19f856cf55c3" -> "0e691ed3748145491d2c73390ece07fd"[label="User Settings"];
        "1ddf060098fd91392a55bb7caf927215" -> "dfcb53ea9620b6ed8f92087c844040ba"[label="automatic_budget"];
        "9c97c91444b089fb3f73b3933d27ce6a" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
        "0bf0986d95aa55b17af3fea664c8cf3a" -> "21d55e29caadc0c64e7c19f856cf55c3"[label="automatic_user_settings"];
      }`).zoom(false);
  }

  render() {
      return (
        <div className="dot-step1" ref={this.ref}/>
      )
    }
}

class Step2 extends Component {
  ref() {
      d3.select(".dot-step2").graphviz().renderDot(`digraph {
        rankdir="TB";
            splines=true;
            overlap=false;
            nodesep="0.2";
            ranksep="0.4";
            labelloc="t";
            fontname="Ovo,Red Hat Text";
            fontsize="11pt"
            bgcolor="#00000000"
                node [ shape="box" style="filled,rounded" margin=0.2 fontname="Red Hat Display,sans-serif" fontsize="11pt" color="#ffffffbb" fontcolor="#ffffffbb" fillcolor="#00363a" ]
                edge [ fontname="Red Hat Text" fontsize="11pt" color="#ffffffbb" fontcolor="#ffffffbb" ]
            "dfcb53ea9620b6ed8f92087c844040ba"[label="Scalar: anonymous"]
            "7227798056dc0d2bbd5e40f28d4f18ef"[label="Scalar: anonymous"]
            "9c97c91444b089fb3f73b3933d27ce6a"[label="Scalar: anonymous"]
            "178b88eb15765bc25d783b20cf8f53c7"[label="Scalar: anonymous"]
            "21d55e29caadc0c64e7c19f856cf55c3"[label="Scalar: anonymous"]
            "0bf0986d95aa55b17af3fea664c8cf3a"[label="Transformed: anonymous"]
            "0e691ed3748145491d2c73390ece07fd"[label="Transformed: anonymous"]
            "1ddf060098fd91392a55bb7caf927215"[label="Transformed (PEP): anonymous"]
            "59cc5eb442981d764714d2aa72b99539"[label="Transformed (PEP): remote_dataset"]
            "b9e47b93bc0d6c28c1a73181ef28e980"[label="Transformed (PEP): df" fillcolor="#006064"]
            "b2249ab5d01816492f2dd92897cf424f"[label="Transformed (PEP): head" fillcolor="#006064"]
            "0e691ed3748145491d2c73390ece07fd" -> "178b88eb15765bc25d783b20cf8f53c7"[label="automatic_protected_paths"];
            "0e691ed3748145491d2c73390ece07fd" -> "9c97c91444b089fb3f73b3933d27ce6a"[label="automatic_public_paths"];
            "dfcb53ea9620b6ed8f92087c844040ba" -> "7227798056dc0d2bbd5e40f28d4f18ef"[label="attributes_budget"];
            "59cc5eb442981d764714d2aa72b99539" -> "b9e47b93bc0d6c28c1a73181ef28e980"[label="select_sql"];
            "0bf0986d95aa55b17af3fea664c8cf3a" -> "0e691ed3748145491d2c73390ece07fd"[label="User Settings"];
            "7227798056dc0d2bbd5e40f28d4f18ef" -> "59cc5eb442981d764714d2aa72b99539"[label="budget_assignment"];
            "178b88eb15765bc25d783b20cf8f53c7" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
            "0e691ed3748145491d2c73390ece07fd" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
            "1ddf060098fd91392a55bb7caf927215" -> "59cc5eb442981d764714d2aa72b99539"[label="budget_assignment"];
            "21d55e29caadc0c64e7c19f856cf55c3" -> "0e691ed3748145491d2c73390ece07fd"[label="User Settings"];
            "1ddf060098fd91392a55bb7caf927215" -> "dfcb53ea9620b6ed8f92087c844040ba"[label="automatic_budget"];
            "9c97c91444b089fb3f73b3933d27ce6a" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
            "0bf0986d95aa55b17af3fea664c8cf3a" -> "21d55e29caadc0c64e7c19f856cf55c3"[label="automatic_user_settings"];
            "b9e47b93bc0d6c28c1a73181ef28e980" -> "b2249ab5d01816492f2dd92897cf424f"[label="pandas.PD_HEAD"];
      }`).zoom(false);
  }

  render() {
      return (
        <div className="dot-step2" ref={this.ref}/>
      )
    }
}

class Step2NoSD extends Component {
  ref() {
      d3.select(".dot-step2nosd").graphviz().renderDot(`digraph {
        rankdir="TB";
            splines=true;
            overlap=false;
            nodesep="0.2";
            ranksep="0.4";
            labelloc="t";
            fontname="Ovo,Red Hat Text";
            fontsize="11pt"
            bgcolor="#00000000"
                node [ shape="box" style="filled,rounded" margin=0.2 fontname="Red Hat Display,sans-serif" fontsize="11pt" color="#ffffffbb" fontcolor="#ffffffbb" fillcolor="#00363a" ]
                edge [ fontname="Red Hat Text" fontsize="11pt" color="#ffffffbb" fontcolor="#ffffffbb" ]
            "dfcb53ea9620b6ed8f92087c844040ba"[label="Scalar: anonymous"]
            "7227798056dc0d2bbd5e40f28d4f18ef"[label="Scalar: anonymous"]
            "9c97c91444b089fb3f73b3933d27ce6a"[label="Scalar: anonymous"]
            "178b88eb15765bc25d783b20cf8f53c7"[label="Scalar: anonymous"]
            "21d55e29caadc0c64e7c19f856cf55c3"[label="Scalar: anonymous"]
            "0bf0986d95aa55b17af3fea664c8cf3a"[label="Transformed: anonymous"]
            "0e691ed3748145491d2c73390ece07fd"[label="Transformed: anonymous"]
            "1ddf060098fd91392a55bb7caf927215"[label="Transformed (PEP): anonymous"]
            "59cc5eb442981d764714d2aa72b99539"[label="Transformed (PEP): remote_dataset" fillcolor="#006064"]
            "b9e47b93bc0d6c28c1a73181ef28e980"[label="Transformed (PEP): df" fillcolor="#006064"]
            "b2249ab5d01816492f2dd92897cf424f"[label="Transformed (PEP): head" fillcolor="#006064"]
            "0e691ed3748145491d2c73390ece07fd" -> "178b88eb15765bc25d783b20cf8f53c7"[label="automatic_protected_paths"];
            "0e691ed3748145491d2c73390ece07fd" -> "9c97c91444b089fb3f73b3933d27ce6a"[label="automatic_public_paths"];
            "dfcb53ea9620b6ed8f92087c844040ba" -> "7227798056dc0d2bbd5e40f28d4f18ef"[label="attributes_budget"];
            "59cc5eb442981d764714d2aa72b99539" -> "b9e47b93bc0d6c28c1a73181ef28e980"[label="select_sql"];
            "0bf0986d95aa55b17af3fea664c8cf3a" -> "0e691ed3748145491d2c73390ece07fd"[label="User Settings"];
            "7227798056dc0d2bbd5e40f28d4f18ef" -> "59cc5eb442981d764714d2aa72b99539"[label="budget_assignment"];
            "178b88eb15765bc25d783b20cf8f53c7" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
            "0e691ed3748145491d2c73390ece07fd" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
            "1ddf060098fd91392a55bb7caf927215" -> "59cc5eb442981d764714d2aa72b99539"[label="budget_assignment"];
            "21d55e29caadc0c64e7c19f856cf55c3" -> "0e691ed3748145491d2c73390ece07fd"[label="User Settings"];
            "1ddf060098fd91392a55bb7caf927215" -> "dfcb53ea9620b6ed8f92087c844040ba"[label="automatic_budget"];
            "9c97c91444b089fb3f73b3933d27ce6a" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
            "0bf0986d95aa55b17af3fea664c8cf3a" -> "21d55e29caadc0c64e7c19f856cf55c3"[label="automatic_user_settings"];
            "b9e47b93bc0d6c28c1a73181ef28e980" -> "b2249ab5d01816492f2dd92897cf424f"[label="pandas.PD_HEAD"];
      }`).zoom(false);
  }

  render() {
    return (
      <div className="dot-step2nosd" ref={this.ref}/>
    )
  }
}

class Step2SD extends Component {
  ref() {
      d3.select(".dot-step2sd").graphviz().renderDot(`digraph {
            splines=true;
            overlap=false;
            nodesep="0.2";
            ranksep="0.4";
            labelloc="t";
            fontname="Ovo,Red Hat Text";
            fontsize="11pt"
            bgcolor="#00000000"
                node [ shape="box" style="filled,rounded" margin=0.2 fontname="Red Hat Display,sans-serif" fontsize="11pt" color="#ffffffbb" fontcolor="#ffffffbb" fillcolor="#00363a" ]
                edge [ fontname="Red Hat Text" fontsize="11pt" color="#ffffffbb" fontcolor="#ffffffbb" ]
            
            "b9e47b93bc0d6c28c1a73181ef28e980"[label="Transformed (PEP): df" fillcolor="#006064"]
            "b2249ab5d01816492f2dd92897cf424f"[label="Transformed (PEP): anonymous", fillcolor="#006064"]

            "08ed25bf9ccaf6458bab4b893e351806"[label="Scalar: anonymous" fillcolor="#c4001d77"]
            "088087f39ae8a0d8844c19b7dcff0fa6"[label="Scalar: anonymous" fillcolor="#c4001d77"]
            "99c9690ca90592dfe92d8bb37b70fe97"[label="Scalar: anonymous" fillcolor="#c4001d77"]
            "dfcb53ea9620b6ed8f92087c844040ba"[label="Scalar: anonymous"]
            "7227798056dc0d2bbd5e40f28d4f18ef"[label="Scalar: anonymous"]
            "178b88eb15765bc25d783b20cf8f53c7"[label="Scalar: anonymous"]
            "9c97c91444b089fb3f73b3933d27ce6a"[label="Scalar: anonymous"]
            "21d55e29caadc0c64e7c19f856cf55c3"[label="Scalar: anonymous"]
            "0bf0986d95aa55b17af3fea664c8cf3a"[label="Transformed: anonymous"]
            "0e691ed3748145491d2c73390ece07fd"[label="Transformed: anonymous"]
            "1ddf060098fd91392a55bb7caf927215"[label="Transformed (PEP): anonymous"]
            "59cc5eb442981d764714d2aa72b99539"[label="Transformed (PEP): remote_dataset" fillcolor="#006064"]
            "74d553878ebe062417d268393c50c703"[label="Transformed (PEP): head" fillcolor="#c4001d77"]
            "0d7d37af7266173caa337d5375bd3009"[label="Synthetic data: remote_dataset" fillcolor="#c4001d77"]
            "ded7ffdb5b39c07a53486ac2b92f6178"[label="Synthetic data: anonymous" fillcolor="#c4001d"]
            "85cba304a0d6fa64a0b80dcc9bc2890b"[label="Synthetic data: anonymous" fillcolor="#c4001d"]
            "952d69f6f9999ea2bbbaa9b6209d3a35"[label="Synthetic data: anonymous" fillcolor="#c4001d"]
            
            "59cc5eb442981d764714d2aa72b99539" -> "b9e47b93bc0d6c28c1a73181ef28e980"[label="select_sql"];
            "b9e47b93bc0d6c28c1a73181ef28e980" -> "b2249ab5d01816492f2dd92897cf424f"[label="pandas.PD_HEAD"];

            "0e691ed3748145491d2c73390ece07fd" -> "178b88eb15765bc25d783b20cf8f53c7"[label="automatic_protected_paths"];
            "dfcb53ea9620b6ed8f92087c844040ba" -> "99c9690ca90592dfe92d8bb37b70fe97"[label="sd_budget"];
            "99c9690ca90592dfe92d8bb37b70fe97" -> "0d7d37af7266173caa337d5375bd3009"[label="Synthetic data"];
            "7227798056dc0d2bbd5e40f28d4f18ef" -> "59cc5eb442981d764714d2aa72b99539"[label="budget_assignment"];
            "0bf0986d95aa55b17af3fea664c8cf3a" -> "21d55e29caadc0c64e7c19f856cf55c3"[label="automatic_user_settings"];
            "85cba304a0d6fa64a0b80dcc9bc2890b" -> "952d69f6f9999ea2bbbaa9b6209d3a35"[label="pandas.PD_HEAD"];
            "0d7d37af7266173caa337d5375bd3009" -> "ded7ffdb5b39c07a53486ac2b92f6178"[label="extract"];
            "21d55e29caadc0c64e7c19f856cf55c3" -> "0e691ed3748145491d2c73390ece07fd"[label="User Settings"];
            "0e691ed3748145491d2c73390ece07fd" -> "9c97c91444b089fb3f73b3933d27ce6a"[label="automatic_public_paths"];
            "0bf0986d95aa55b17af3fea664c8cf3a" -> "0e691ed3748145491d2c73390ece07fd"[label="User Settings"];
            "ded7ffdb5b39c07a53486ac2b92f6178" -> "85cba304a0d6fa64a0b80dcc9bc2890b"[label="select_sql"];
            "178b88eb15765bc25d783b20cf8f53c7" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
            "088087f39ae8a0d8844c19b7dcff0fa6" -> "0d7d37af7266173caa337d5375bd3009"[label="Synthetic data"];
            "1ddf060098fd91392a55bb7caf927215" -> "dfcb53ea9620b6ed8f92087c844040ba"[label="automatic_budget"];
            "0e691ed3748145491d2c73390ece07fd" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
            "dfcb53ea9620b6ed8f92087c844040ba" -> "7227798056dc0d2bbd5e40f28d4f18ef"[label="attributes_budget"];
            "74d553878ebe062417d268393c50c703" -> "088087f39ae8a0d8844c19b7dcff0fa6"[label="sampling_ratios"];
            "74d553878ebe062417d268393c50c703" -> "0d7d37af7266173caa337d5375bd3009"[label="Synthetic data"];
            "08ed25bf9ccaf6458bab4b893e351806" -> "0d7d37af7266173caa337d5375bd3009"[label="Synthetic data"];
            "1ddf060098fd91392a55bb7caf927215" -> "59cc5eb442981d764714d2aa72b99539"[label="budget_assignment"];
            "9c97c91444b089fb3f73b3933d27ce6a" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
            "59cc5eb442981d764714d2aa72b99539" -> "74d553878ebe062417d268393c50c703"[label="DifferentiatedSample"];

            "59cc5eb442981d764714d2aa72b99539" -> "ded7ffdb5b39c07a53486ac2b92f6178"[label="Synthetic version" style=dashed fontcolor="#ff616f" color="#ff616f"];
            "b9e47b93bc0d6c28c1a73181ef28e980" -> "85cba304a0d6fa64a0b80dcc9bc2890b"[label="Synthetic version" style=dashed fontcolor="#ff616f" color="#ff616f"];
            "b2249ab5d01816492f2dd92897cf424f" -> "952d69f6f9999ea2bbbaa9b6209d3a35"[label="Synthetic version" style=dashed fontcolor="#ff616f" color="#ff616f"];
      }`).zoom(false);
  }

  render() {
      return (
        <div className="dot-step2sd" ref={this.ref}/>
      )
    }
}

class Step3 extends Component {
  ref() {
      d3.select(".dot-step3").graphviz().renderDot(`digraph {
        rankdir="TB";
            splines=true;
            overlap=false;
            nodesep="0.2";
            ranksep="0.4";
            labelloc="t";
            fontname="Ovo,Red Hat Text";
            fontsize="11pt"
            bgcolor="#00000000"
                node [ shape="box" style="filled,rounded" margin=0.2 fontname="Red Hat Display,sans-serif" fontsize="11pt" color="#ffffffbb" fontcolor="#ffffffbb" fillcolor="#00363a" ]
                edge [ fontname="Red Hat Text" fontsize="11pt" color="#ffffffbb" fontcolor="#ffffffbb" ]
            "dfcb53ea9620b6ed8f92087c844040ba"[label="Scalar: anonymous"]
            "7227798056dc0d2bbd5e40f28d4f18ef"[label="Scalar: anonymous"]
            "178b88eb15765bc25d783b20cf8f53c7"[label="Scalar: anonymous"]
            "9c97c91444b089fb3f73b3933d27ce6a"[label="Scalar: anonymous"]
            "21d55e29caadc0c64e7c19f856cf55c3"[label="Scalar: anonymous"]
            "0bf0986d95aa55b17af3fea664c8cf3a"[label="Transformed: anonymous"]
            "0e691ed3748145491d2c73390ece07fd"[label="Transformed: anonymous"]
            "1ddf060098fd91392a55bb7caf927215"[label="Transformed (PEP): anonymous"]
            "59cc5eb442981d764714d2aa72b99539"[label="Transformed (PEP): remote_dataset"]
            "b9e47b93bc0d6c28c1a73181ef28e980"[label="Transformed (PEP): df"]
            "056e8d9f3ce18a07d9d7ddaac4c1b643"[label="Transformed (PEP): anonymous"]
            "78aede1b71211aed9472b9d0e6f0efd1"[label="Scalar: mean" fillcolor="#006064"]
            "b9e47b93bc0d6c28c1a73181ef28e980" -> "056e8d9f3ce18a07d9d7ddaac4c1b643"[label="pandas.PD_LOC"];
            "0bf0986d95aa55b17af3fea664c8cf3a" -> "21d55e29caadc0c64e7c19f856cf55c3"[label="automatic_user_settings"];
            "0e691ed3748145491d2c73390ece07fd" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
            "0e691ed3748145491d2c73390ece07fd" -> "178b88eb15765bc25d783b20cf8f53c7"[label="automatic_protected_paths"];
            "1ddf060098fd91392a55bb7caf927215" -> "59cc5eb442981d764714d2aa72b99539"[label="budget_assignment"];
            "0bf0986d95aa55b17af3fea664c8cf3a" -> "0e691ed3748145491d2c73390ece07fd"[label="User Settings"];
            "178b88eb15765bc25d783b20cf8f53c7" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
            "9c97c91444b089fb3f73b3933d27ce6a" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
            "1ddf060098fd91392a55bb7caf927215" -> "dfcb53ea9620b6ed8f92087c844040ba"[label="automatic_budget"];
            "7227798056dc0d2bbd5e40f28d4f18ef" -> "59cc5eb442981d764714d2aa72b99539"[label="budget_assignment"];
            "0e691ed3748145491d2c73390ece07fd" -> "9c97c91444b089fb3f73b3933d27ce6a"[label="automatic_public_paths"];
            "056e8d9f3ce18a07d9d7ddaac4c1b643" -> "78aede1b71211aed9472b9d0e6f0efd1"[label="pandas.PD_MEAN"];
            "59cc5eb442981d764714d2aa72b99539" -> "b9e47b93bc0d6c28c1a73181ef28e980"[label="select_sql"];
            "21d55e29caadc0c64e7c19f856cf55c3" -> "0e691ed3748145491d2c73390ece07fd"[label="User Settings"];
            "dfcb53ea9620b6ed8f92087c844040ba" -> "7227798056dc0d2bbd5e40f28d4f18ef"[label="attributes_budget"];
      }`).zoom(false);
  }

  render() {
      return (
        <div className="dot-step3" ref={this.ref}/>
      )
    }
}

class Step3NoAlt extends Component {
  ref() {
      d3.select(".dot-step3noalt").graphviz().renderDot(`digraph {
        rankdir="TB";
            splines=true;
            overlap=false;
            nodesep="0.2";
            ranksep="0.4";
            labelloc="t";
            fontname="Ovo,Red Hat Text";
            fontsize="11pt"
            bgcolor="#00000000"
                node [ shape="box" style="filled,rounded" margin=0.2 fontname="Red Hat Display,sans-serif" fontsize="11pt" color="#ffffffbb" fontcolor="#ffffffbb" fillcolor="#00363a" ]
                edge [ fontname="Red Hat Text" fontsize="11pt" color="#ffffffbb" fontcolor="#ffffffbb" ]
            "dfcb53ea9620b6ed8f92087c844040ba"[label="Scalar: anonymous"]
            "7227798056dc0d2bbd5e40f28d4f18ef"[label="Scalar: anonymous"]
            "178b88eb15765bc25d783b20cf8f53c7"[label="Scalar: anonymous"]
            "9c97c91444b089fb3f73b3933d27ce6a"[label="Scalar: anonymous"]
            "21d55e29caadc0c64e7c19f856cf55c3"[label="Scalar: anonymous"]
            "0bf0986d95aa55b17af3fea664c8cf3a"[label="Transformed: anonymous"]
            "0e691ed3748145491d2c73390ece07fd"[label="Transformed: anonymous"]
            "1ddf060098fd91392a55bb7caf927215"[label="Transformed (PEP): anonymous"]
            "59cc5eb442981d764714d2aa72b99539"[label="Transformed (PEP): remote_dataset" fillcolor="#006064"]
            "b9e47b93bc0d6c28c1a73181ef28e980"[label="Transformed (PEP): df" fillcolor="#006064"]
            "056e8d9f3ce18a07d9d7ddaac4c1b643"[label="Transformed (PEP): anonymous" fillcolor="#006064"]
            "78aede1b71211aed9472b9d0e6f0efd1"[label="Scalar: mean" fillcolor="#006064"]
            "b9e47b93bc0d6c28c1a73181ef28e980" -> "056e8d9f3ce18a07d9d7ddaac4c1b643"[label="pandas.PD_LOC"];
            "0bf0986d95aa55b17af3fea664c8cf3a" -> "21d55e29caadc0c64e7c19f856cf55c3"[label="automatic_user_settings"];
            "0e691ed3748145491d2c73390ece07fd" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
            "0e691ed3748145491d2c73390ece07fd" -> "178b88eb15765bc25d783b20cf8f53c7"[label="automatic_protected_paths"];
            "1ddf060098fd91392a55bb7caf927215" -> "59cc5eb442981d764714d2aa72b99539"[label="budget_assignment"];
            "0bf0986d95aa55b17af3fea664c8cf3a" -> "0e691ed3748145491d2c73390ece07fd"[label="User Settings"];
            "178b88eb15765bc25d783b20cf8f53c7" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
            "9c97c91444b089fb3f73b3933d27ce6a" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
            "1ddf060098fd91392a55bb7caf927215" -> "dfcb53ea9620b6ed8f92087c844040ba"[label="automatic_budget"];
            "7227798056dc0d2bbd5e40f28d4f18ef" -> "59cc5eb442981d764714d2aa72b99539"[label="budget_assignment"];
            "0e691ed3748145491d2c73390ece07fd" -> "9c97c91444b089fb3f73b3933d27ce6a"[label="automatic_public_paths"];
            "056e8d9f3ce18a07d9d7ddaac4c1b643" -> "78aede1b71211aed9472b9d0e6f0efd1"[label="pandas.PD_MEAN"];
            "59cc5eb442981d764714d2aa72b99539" -> "b9e47b93bc0d6c28c1a73181ef28e980"[label="select_sql"];
            "21d55e29caadc0c64e7c19f856cf55c3" -> "0e691ed3748145491d2c73390ece07fd"[label="User Settings"];
            "dfcb53ea9620b6ed8f92087c844040ba" -> "7227798056dc0d2bbd5e40f28d4f18ef"[label="attributes_budget"];
      }`).zoom(false);
  }

  render() {
    return (
      <div className="dot-step3noalt" ref={this.ref}/>
    )
  }
}

class Step3Alt extends Component {
  ref() {
      d3.select(".dot-step3alt").graphviz().renderDot(`digraph {
            splines=true;
            overlap=false;
            nodesep="0.2";
            ranksep="0.4";
            labelloc="t";
            fontname="Ovo,Red Hat Text";
            fontsize="11pt"
            bgcolor="#00000000"
                node [ shape="box" style="filled,rounded" margin=0.2 fontname="Red Hat Display,sans-serif" fontsize="11pt" color="#ffffffbb" fontcolor="#ffffffbb" fillcolor="#00363a" ]
                edge [ fontname="Red Hat Text" fontsize="11pt" color="#ffffffbb" fontcolor="#ffffffbb" ]
            "78aede1b71211aed9472b9d0e6f0efd1"[label="Scalar: mean" fillcolor="#006064"]

            "8048c8eba76bddf15b6b35044a2f0817"[label="Scalar: anonymous" fillcolor="#c4001d77"]
            "a9dade2d51b52695cbb4808591a0f218"[label="Scalar: anonymous" fillcolor="#c4001d77"]
            "08c4fd164828efb9b4af5a5d6b63129d"[label="Scalar: anonymous" fillcolor="#c4001d77"]
            "dfcb53ea9620b6ed8f92087c844040ba"[label="Scalar: anonymous"]
            "7227798056dc0d2bbd5e40f28d4f18ef"[label="Scalar: anonymous"]
            "178b88eb15765bc25d783b20cf8f53c7"[label="Scalar: anonymous" ]
            "9c97c91444b089fb3f73b3933d27ce6a"[label="Scalar: anonymous"]
            "21d55e29caadc0c64e7c19f856cf55c3"[label="Scalar: anonymous"]
            "0bf0986d95aa55b17af3fea664c8cf3a"[label="Transformed: anonymous"]
            "0e691ed3748145491d2c73390ece07fd"[label="Transformed: anonymous"]
            "1ddf060098fd91392a55bb7caf927215"[label="Transformed (PEP): anonymous"]
            "59cc5eb442981d764714d2aa72b99539"[label="Transformed (PEP): remote_dataset" fillcolor="#006064"]
            "b9e47b93bc0d6c28c1a73181ef28e980"[label="Transformed (PEP): df" fillcolor="#006064"]
            "056e8d9f3ce18a07d9d7ddaac4c1b643"[label="Transformed (PEP): anonymous" fillcolor="#006064"]
            "49522d93fed5da95c5adb63208554888"[label="Scalar (DP): mean" fillcolor="#c4001d"]

            "056e8d9f3ce18a07d9d7ddaac4c1b643" -> "78aede1b71211aed9472b9d0e6f0efd1"[label="pandas.PD_MEAN"];

            "b9e47b93bc0d6c28c1a73181ef28e980" -> "056e8d9f3ce18a07d9d7ddaac4c1b643"[label="pandas.PD_LOC"];
            "0bf0986d95aa55b17af3fea664c8cf3a" -> "21d55e29caadc0c64e7c19f856cf55c3"[label="automatic_user_settings"];
            "0e691ed3748145491d2c73390ece07fd" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
            "0e691ed3748145491d2c73390ece07fd" -> "178b88eb15765bc25d783b20cf8f53c7"[label="automatic_protected_paths"];
            "1ddf060098fd91392a55bb7caf927215" -> "59cc5eb442981d764714d2aa72b99539"[label="budget_assignment"];
            "0bf0986d95aa55b17af3fea664c8cf3a" -> "0e691ed3748145491d2c73390ece07fd"[label="User Settings"];
            "8048c8eba76bddf15b6b35044a2f0817" -> "a9dade2d51b52695cbb4808591a0f218"[label="derive_seed"];
            "178b88eb15765bc25d783b20cf8f53c7" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
            "9c97c91444b089fb3f73b3933d27ce6a" -> "1ddf060098fd91392a55bb7caf927215"[label="Protect"];
            "1ddf060098fd91392a55bb7caf927215" -> "dfcb53ea9620b6ed8f92087c844040ba"[label="automatic_budget"];
            "a9dade2d51b52695cbb4808591a0f218" -> "49522d93fed5da95c5adb63208554888"[label="pandas.PD_MEAN_DP"];
            "7227798056dc0d2bbd5e40f28d4f18ef" -> "59cc5eb442981d764714d2aa72b99539"[label="budget_assignment"];
            "08c4fd164828efb9b4af5a5d6b63129d" -> "49522d93fed5da95c5adb63208554888"[label="pandas.PD_MEAN_DP"];
            "0e691ed3748145491d2c73390ece07fd" -> "9c97c91444b089fb3f73b3933d27ce6a"[label="automatic_public_paths"];
            "056e8d9f3ce18a07d9d7ddaac4c1b643" -> "49522d93fed5da95c5adb63208554888"[label="pandas.PD_MEAN_DP"];
            "59cc5eb442981d764714d2aa72b99539" -> "b9e47b93bc0d6c28c1a73181ef28e980"[label="select_sql"];
            "21d55e29caadc0c64e7c19f856cf55c3" -> "0e691ed3748145491d2c73390ece07fd"[label="User Settings"];
            "dfcb53ea9620b6ed8f92087c844040ba" -> "7227798056dc0d2bbd5e40f28d4f18ef"[label="attributes_budget"];

            "78aede1b71211aed9472b9d0e6f0efd1" -> "49522d93fed5da95c5adb63208554888"[label="DP version" style=dashed fontcolor="#ff616f" color="#ff616f"];
      }`).zoom(false);
  }

  render() {
      return (
        <div className="dot-step3alt" ref={this.ref}/>
      )
    }
}

export {
  Step1,
  Step2,
  Step2NoSD,
  Step2SD,
  Step3,
  Step3NoAlt,
  Step3Alt,
}