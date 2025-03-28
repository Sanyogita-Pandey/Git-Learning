#include<iostream>
using namespace std;
int main(){
        int stalls[5] = {1,3,7,4,9};
        int n = sizeof(stalls);
        for(int j=0;j<n;j++){
        for(int i=0;i<n;i++){
            if(stalls[i]>stalls[i+1])
            swap(stalls[i],stalls[i+1]);
        }
        }
        cout<<n<<endl;
        for(int i=0;i<n;i++){
            cout<<stalls[i]<<" "<<endl;
        }
        int k = 3;
        int start=1,end,mid,ans;
        end = stalls[n-1]-stalls[0];
        while(start<=end){
        mid = start+(end-start)/2;
        int count = 1,pos = stalls[0];
        for(int i=1;i<n;i++){
            if(pos+mid<=stalls[i]){
                count++;
                pos = stalls[i];
            }
        }
        if(count<k){
            end = mid-1;
        }
        else{
            ans = mid;
            start = mid+1;
        }
    }
    cout<<ans;
    }
