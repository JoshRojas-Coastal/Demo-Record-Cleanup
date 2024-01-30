//  Javascript controller for the help modal of the Demo Cleanup LWC.
//
//  Copyright (c) 2021-2024, Salesforce.com, Inc.
//  All rights reserved.
//  SPDX-License-Identifier: BSD-3-Clause
//  For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
//
//  Contact: john.meyer@salesforce.com

import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class DemoCleanupHelpModal extends LightningModal {
	@api cleanupTaskListViewUrl;
	version = '3.2';

	handleCloseButton(event) {
		this.close();
	}
}
