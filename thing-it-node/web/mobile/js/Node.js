/*******************************************************************************
 * Copyright (c) 2014-2015 Marc Gille. All rights reserved.
 ******************************************************************************/

define([ "mobile/js/Utils", "mobile/js/Device", "mobile/js/Group" ], function(
		Utils, Device, Group) {
	return {
		bind : function(deviceTypes, node) {
			Utils.inheritMethods(node, new Node());

			node.bind(deviceTypes);

			console.log();
			
			return node;
		}
	};

	/**
	 * 
	 */
	function Node() {
		/**
		 * 
		 */
		Node.prototype.bind = function(deviceTypes) {
			for (var n = 0; n < this.devices.length; n++) {
				Device.bind(deviceTypes, this, this.devices[n]);
			}

			for (var n = 0; n < this.groups.length; n++) {
				Group.bind(this, this.groups[n]);
			}
		};

		/**
		 * 
		 */
		Node.prototype.getDevice = function(id) {
			for ( var n in this.devices) {
				if (this.devices[n].id === id) {
					return this.devices[n];
				}
			}

			throw "Cannot find Device [" + id
			"].";
		};

		/**
		 * 
		 */
		Node.prototype.getService = function(id) {
			for ( var n in this.services) {
				if (this.services[n].id === id) {
					return this.services[n];
				}
			}

			throw "Cannot find Device [" + id
			"].";
		};

		/**
		 * 
		 */
		Node.prototype.getAllGroups = function() {
			var groups = [];

			for ( var n in this.groups) {
				groups.push.apply(groups, this.groups[n].getAllGroups());
				groups.push(this.groups[n]);
			}

			return groups;
		};
	}
});