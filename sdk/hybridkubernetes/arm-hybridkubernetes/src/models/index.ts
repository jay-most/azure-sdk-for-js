/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * The object that represents the operation.
 */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft.connectedClusters
   */
  provider?: string;
  /**
   * Connected Cluster Resource on which the operation is performed
   */
  resource?: string;
  /**
   * Operation type: Read, write, delete, etc.
   */
  operation?: string;
  /**
   * Description of the operation.
   */
  description?: string;
}

/**
 * The Connected cluster API operation
 */
export interface Operation {
  /**
   * Operation name: {Microsoft.Kubernetes}/{resource}/{operation}
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The object that represents the operation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly display?: OperationDisplay;
}

/**
 * Identity for the connected cluster.
 */
export interface ConnectedClusterIdentity {
  /**
   * The principal id of connected cluster identity. This property will only be provided for a
   * system assigned identity.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly principalId?: string;
  /**
   * The tenant id associated with the connected cluster. This property will only be provided for a
   * system assigned identity.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tenantId?: string;
  /**
   * The type of identity used for the connected cluster. The type 'SystemAssigned, includes a
   * system created identity. The type 'None' means no identity is assigned to the connected
   * cluster. Possible values include: 'None', 'SystemAssigned'. Default value: 'SystemAssigned'.
   */
  type: ResourceIdentityType;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemData {
  /**
   * The identity that created the resource.
   */
  createdBy?: string;
  /**
   * The type of identity that created the resource. Possible values include: 'User',
   * 'Application', 'ManagedIdentity', 'Key'
   */
  createdByType?: CreatedByType;
  /**
   * The timestamp of resource creation (UTC).
   */
  createdAt?: Date;
  /**
   * The identity that last modified the resource.
   */
  lastModifiedBy?: string;
  /**
   * The type of identity that last modified the resource. Possible values include: 'User',
   * 'Application', 'ManagedIdentity', 'Key'
   */
  lastModifiedByType?: LastModifiedByType;
  /**
   * The timestamp of resource modification (UTC).
   */
  lastModifiedAt?: Date;
}

/**
 * Common fields that are returned in the response for all Azure Resource Manager resources
 * @summary Resource
 */
export interface Resource extends BaseResource {
  /**
   * Fully qualified resource ID for the resource. Ex -
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The name of the resource
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or
   * "Microsoft.Storage/storageAccounts"
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
}

/**
 * The resource model definition for an Azure Resource Manager tracked top level resource which has
 * 'tags' and a 'location'
 * @summary Tracked Resource
 */
export interface TrackedResource extends Resource {
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
  /**
   * The geo-location where the resource lives
   */
  location: string;
}

/**
 * Represents a connected cluster.
 */
export interface ConnectedCluster extends TrackedResource {
  /**
   * The identity of the connected cluster.
   */
  identity: ConnectedClusterIdentity;
  /**
   * Base64 encoded public certificate used by the agent to do the initial handshake to the backend
   * services in Azure.
   */
  agentPublicKeyCertificate: string;
  /**
   * The Kubernetes version of the connected cluster resource
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly kubernetesVersion?: string;
  /**
   * Number of nodes present in the connected cluster resource
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly totalNodeCount?: number;
  /**
   * Number of CPU cores present in the connected cluster resource
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly totalCoreCount?: number;
  /**
   * Version of the agent running on the connected cluster resource
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly agentVersion?: string;
  /**
   * Provisioning state of the connected cluster resource. Possible values include: 'Succeeded',
   * 'Failed', 'Canceled', 'Provisioning', 'Updating', 'Deleting', 'Accepted'
   */
  provisioningState?: ProvisioningState;
  /**
   * The Kubernetes distribution running on this connected cluster.
   */
  distribution?: string;
  /**
   * The infrastructure on which the Kubernetes cluster represented by this connected cluster is
   * running on.
   */
  infrastructure?: string;
  /**
   * Connected cluster offering
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly offering?: string;
  /**
   * Expiration time of the managed identity certificate
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly managedIdentityCertificateExpirationTime?: Date;
  /**
   * Time representing the last instance when heart beat was received from the cluster
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly lastConnectivityTime?: Date;
  /**
   * Represents the connectivity status of the connected cluster. Possible values include:
   * 'Connecting', 'Connected', 'Offline', 'Expired'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly connectivityStatus?: ConnectivityStatus;
  /**
   * Metadata pertaining to creation and last modification of the resource
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly systemData?: SystemData;
}

/**
 * Object containing updates for patch operations.
 */
export interface ConnectedClusterPatch {
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
  /**
   * Describes the connected cluster resource properties that can be updated during PATCH
   * operation.
   */
  properties?: any;
}

/**
 * The resource model definition for a Azure Resource Manager proxy resource. It will not have tags
 * and a location
 * @summary Proxy Resource
 */
export interface ProxyResource extends Resource {
}

/**
 * The resource model definition for an Azure Resource Manager resource with an etag.
 * @summary Entity Resource
 */
export interface AzureEntityResource extends Resource {
  /**
   * Resource Etag.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly etag?: string;
}

/**
 * The resource management error additional info.
 */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * The additional info.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly info?: any;
}

/**
 * The error detail.
 */
export interface ErrorDetail {
  /**
   * The error code.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly code?: string;
  /**
   * The error message.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
  /**
   * The error target.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly target?: string;
  /**
   * The error details.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/**
 * Common error response for all Azure Resource Manager APIs to return error details for failed
 * operations. (This also follows the OData error response format.).
 * @summary Error response
 */
export interface ErrorResponse {
  /**
   * The error object.
   */
  error?: ErrorDetail;
}

/**
 * An interface representing ConnectedKubernetesClientOptions.
 */
export interface ConnectedKubernetesClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * The paginated list of connected Clusters
 * @extends Array<ConnectedCluster>
 */
export interface ConnectedClusterList extends Array<ConnectedCluster> {
  /**
   * The link to fetch the next page of connected cluster
   */
  nextLink?: string;
}

/**
 * @interface
 * The paginated list of connected cluster API operations.
 * @extends Array<Operation>
 */
export interface OperationList extends Array<Operation> {
  /**
   * The link to fetch the next page of connected cluster API operations.
   */
  nextLink?: string;
}

/**
 * Defines values for ResourceIdentityType.
 * Possible values include: 'None', 'SystemAssigned'
 * @readonly
 * @enum {string}
 */
export type ResourceIdentityType = 'None' | 'SystemAssigned';

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Succeeded', 'Failed', 'Canceled', 'Provisioning', 'Updating',
 * 'Deleting', 'Accepted'
 * @readonly
 * @enum {string}
 */
export type ProvisioningState = 'Succeeded' | 'Failed' | 'Canceled' | 'Provisioning' | 'Updating' | 'Deleting' | 'Accepted';

/**
 * Defines values for ConnectivityStatus.
 * Possible values include: 'Connecting', 'Connected', 'Offline', 'Expired'
 * @readonly
 * @enum {string}
 */
export type ConnectivityStatus = 'Connecting' | 'Connected' | 'Offline' | 'Expired';

/**
 * Defines values for CreatedByType.
 * Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'
 * @readonly
 * @enum {string}
 */
export type CreatedByType = 'User' | 'Application' | 'ManagedIdentity' | 'Key';

/**
 * Defines values for LastModifiedByType.
 * Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'
 * @readonly
 * @enum {string}
 */
export type LastModifiedByType = 'User' | 'Application' | 'ManagedIdentity' | 'Key';

/**
 * Contains response data for the create operation.
 */
export type ConnectedClusterCreateResponse = ConnectedCluster & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConnectedCluster;
    };
};

/**
 * Contains response data for the update operation.
 */
export type ConnectedClusterUpdateResponse = ConnectedCluster & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConnectedCluster;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ConnectedClusterGetResponse = ConnectedCluster & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConnectedCluster;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type ConnectedClusterListByResourceGroupResponse = ConnectedClusterList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConnectedClusterList;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type ConnectedClusterListBySubscriptionResponse = ConnectedClusterList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConnectedClusterList;
    };
};

/**
 * Contains response data for the beginCreate operation.
 */
export type ConnectedClusterBeginCreateResponse = ConnectedCluster & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConnectedCluster;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type ConnectedClusterListByResourceGroupNextResponse = ConnectedClusterList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConnectedClusterList;
    };
};

/**
 * Contains response data for the listBySubscriptionNext operation.
 */
export type ConnectedClusterListBySubscriptionNextResponse = ConnectedClusterList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConnectedClusterList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type OperationsGetResponse = OperationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationList;
    };
};

/**
 * Contains response data for the getNext operation.
 */
export type OperationsGetNextResponse = OperationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationList;
    };
};
